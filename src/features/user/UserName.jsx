import { useSelector } from "react-redux"

function Username() {
  const firstName = useSelector((state)=>state.user.firstName)

  if(!firstName) return null;
  return (
   <div className=" text-sm font-semibold uppercase">{firstName}</div>
  )
}

export default Username
