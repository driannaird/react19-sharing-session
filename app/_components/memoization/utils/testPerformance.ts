export default function testPerformance(theme: boolean): boolean {
  console.log(
    `[SENGAJA DI LAMBATKAN]: Pengibaratan proses render yang lama ${
      theme ? "On" : "Off"
    }`
  );
  const startTime = performance.now();
  while (performance.now() - startTime < 500) {
    // Tidak melakukan apa pun selama 500 ms untuk meniru kode yang sangat lambat
  }

  return theme;
}
