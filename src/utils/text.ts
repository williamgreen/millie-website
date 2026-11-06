/**
 * Plain text copied from the Wix site uses line breaks for layout, "•" or "💚"
 * at the start of a line for bullet points, and short lines ending in ":" as
 * little headings. textBlocks() turns that into blocks the site can style.
 */
export type TextBlock =
  | { type: 'paragraph'; lines: string[] }
  /** level 3 headings; a "section" heading is followed directly by level 4 subheadings. */
  | { type: 'heading'; text: string; level: 3 | 4; section: boolean }
  | { type: 'list'; items: string[] };

const BULLET = /^(?:•|💚)\s*/u;

export function textBlocks(text: string, { headings = true } = {}): TextBlock[] {
  const blocks: TextBlock[] = [];
  // The block a following line (with no blank line in between) continues.
  let open: TextBlock | undefined;

  for (const raw of text.split('\n')) {
    const line = raw.trim();
    if (!line) {
      open = undefined;
    } else if (BULLET.test(line)) {
      const item = line.replace(BULLET, '');
      if (open?.type === 'list') open.items.push(item);
      else blocks.push((open = { type: 'list', items: [item] }));
    } else if (headings && line.endsWith(':') && line.length <= 60) {
      blocks.push({ type: 'heading', text: line, level: 3, section: false });
      open = undefined;
    } else if (open?.type === 'paragraph') {
      open.lines.push(line);
    } else {
      blocks.push((open = { type: 'paragraph', lines: [line] }));
    }
  }

  // A heading followed straight away by another heading starts a section, and the
  // headings after it are its subheadings: "Initial consultation:" then
  // "Pre appointment health questionnaire:" ... "You will receive:".
  let inSection = false;
  blocks.forEach((block, i) => {
    if (block.type !== 'heading') return;
    if (inSection) block.level = 4;
    else if (blocks[i + 1]?.type === 'heading') block.section = inSection = true;
  });

  return blocks;
}

/** The same text as one flowing string, e.g. for an image's alt text. */
export function plainText(text: string): string {
  return textBlocks(text, { headings: false })
    .map((block) =>
      block.type === 'list'
        ? `${block.items.map((item) => item.replace(/[.;]$/, '')).join('; ')}.`
        : block.type === 'paragraph'
          ? block.lines.join(' ')
          : block.text,
    )
    .join(' ');
}
