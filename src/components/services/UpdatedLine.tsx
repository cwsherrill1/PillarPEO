/** The visible "Updated" line every page carries. */
const UpdatedLine = ({ text = "Updated September 2026" }: { text?: string }) => (
  <p className="text-sm text-muted-foreground">{text}</p>
);

export default UpdatedLine;
