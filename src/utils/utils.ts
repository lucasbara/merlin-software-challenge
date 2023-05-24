export function convertMsToTime(ms: number) {
  const totalSeconds = Math.floor(ms / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const zeroHours = hours === 0;

  const totalTime = `${!zeroHours ? hours : ""}${
    !zeroHours ? ":" + minutes : minutes
  }${zeroHours ? ":" + seconds : ""}`;

  return totalTime;
}
