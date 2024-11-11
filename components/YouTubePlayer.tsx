export const YouTubePlayer = ({ videoId }) => {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        paddingTop: '56.25%' /* 16:9 Aspect Ratio */,
      }}
    >
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          border: 0,
        }}
      />
    </div>
  );
};
