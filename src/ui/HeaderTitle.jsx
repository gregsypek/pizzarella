function HeaderTitle({ h1, p, padding }) {
  return (
    <div className={`${padding ? `pt-${padding}` : ""} text-left`}>
      <h2 className="text-3xl font-semibold capitalize tracking-tight text-black  sm:text-4xl ">
        {h1}
      </h2>
      <p className="text-xl leading-8 text-gray-600">{p}</p>
    </div>
  );
}

export default HeaderTitle;
