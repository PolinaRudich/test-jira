/** @format */

export const SvgArrowdown = (props: any) => {
  return (
    <>
      <svg
        onClick={() => props.download(props.file, props.fileName)}
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        id="Layer_1"
        x="0px"
        y="0px"
        width="17px"
        fill="#3F2A79"
        height="17px"
        viewBox="0 0 96 96"
        enable-background="new 0 0 96 96">
        <path d="M44,12v62.344L22.828,53.172c-1.562-1.562-4.094-1.562-5.656,0c-1.562,1.562-1.562,4.095,0,5.657l28,28    c1.562,1.562,4.095,1.562,5.656,0l28-28C79.609,58.048,80,57.024,80,56c0-1.023-0.391-2.047-1.172-2.828    c-1.562-1.562-4.095-1.562-5.656,0L52,74.344V12c0-2.208-1.791-4-4-4S44,9.791,44,12z" />
      </svg>
    </>
  );
};
