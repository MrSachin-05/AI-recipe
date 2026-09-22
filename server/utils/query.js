// server/utils/query.js
/**
 * Safely extracts query parameters from Express req.query,
 * handling both flat bracketed strings and nested qs objects.
 */
function getQueryVal(query, path) {
  if (!query) return undefined;
  
  // Try exact flat key: e.g. "filters[title][$eqi]"
  const flatKey = path.reduce((acc, part, idx) => (idx === 0 ? part : `${acc}[${part}]`), "");
  if (query[flatKey] !== undefined) {
    const val = query[flatKey];
    return Array.isArray(val) ? val[0] : val;
  }

  // Traverse nested object: e.g. query.filters.title.$eqi
  let curr = query;
  for (const part of path) {
    if (curr == null || typeof curr !== "object") return undefined;
    curr = curr[part];
  }

  if (Array.isArray(curr)) return curr[0];
  return curr;
}

module.exports = { getQueryVal };
