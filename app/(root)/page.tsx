import { UserButton } from "@clerk/nextjs"

const SetupPage = () => {
  return (
    <div className="p-3">
      <UserButton afterSignOutUrl="/" />
    </div>
  )
}

export default SetupPage;