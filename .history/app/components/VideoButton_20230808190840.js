export default function VideoButton() {
  return (
    <div>
      <video width="320" height="240" controls>
        <source src="/video.mp4" type="video/mp4"></source>
      </video>
    </div>
  );
}
