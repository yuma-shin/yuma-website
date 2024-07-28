export function formatDate(dateString) {
  return new Date(`${dateString}T00:00:00Z`).toLocaleDateString('ja-JP', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'JST',
  })
}
