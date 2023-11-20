import loader from "../images/logo-loader.svg";

function Loader() {
  return (
    <div className="absolute inset-0 z-[1000] flex items-center justify-center bg-slate-600/40 backdrop-blur-sm">
      <div class="loader">
        <img src={loader} alt="Logo" class="h-12 w-12 animate-spin" />
      </div>
    </div>
  );
}

export default Loader;
