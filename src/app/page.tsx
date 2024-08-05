import Image from "next/image";

export default function Home() {
  return (
    // <main className="flex bg-slate-300 text-slate-950 min-h-screen flex-col items-center justify-between p-24">
    //   <h1>Tesla Lab</h1>
    //   <p>Tesla lab is project for making blog with Nikola Tesla</p>
    // </main>
    <main className="flex p-14 bg-slate-200 text-slate-950 text-center items-center justify-center ">
      <div>
        {/* Content make like x  */}
        <div className="bg-gray-300 divide-y lg:w-2/3 xl:w-2/2 2xl:w-2/3  lg:mx-auto xl:mx-auto 2xl:mx-auto">
          <div className="flex gap-2 p-2">
            <div className="w-32 h-32">
              <Image className="rounded-full w-24 h-12" src="/coder.jpg" alt="coder" width="0" height="0" />
            </div>
            <div className="text-start">
              <div className="flex gap-1">
                <h1>Tesla Lab</h1>
                <h1>@teslalab</h1>
                <h1>3h</h1>
              </div>
              <div>
                <h1>Content Here</h1>
                <p>Lorem ipsum lorem appdolor sit amet, consectetur adipisicing elit. Impedit ipsum corrupti similique asperiores ad suscipit, perspiciatis quidem reiciendis laborum vel tempore consectetur dignissimos beatae aut consequuntur, sapiente reprehenderit ex. Deleniti.</p>
                <p>This content for my tesla lab application!</p>
                <p>We are also some of content with this project!</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </main>
  );
}
