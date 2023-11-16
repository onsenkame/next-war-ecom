import prismadb from "@/lib/prismadb";

import { BillboardClient } from "./components/client";

// import { BillboardForm } from "./components/billboard-form";

// const BillboardPage = async ({
//   params
// }: {
//   params: { billboardId: string }
// }) => {
//   const billboard = await prismadb.billboard.findUnique({
//     where: {
//       id: params.billboardId
//     }
//   });

const BillboardPage = () => {

  return ( 
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        {/* <BillboardForm initialData={billboard} /> */}
        <BillboardClient />
      </div>
    </div>
  );
}

export default BillboardPage;