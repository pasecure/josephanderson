import * as React from 'react'

export const EmploymentFormsHeader: React.FunctionComponent = () => {
  return (
    <>
      <div className="w-full bg-[#0f497b] py-6 px-2 md:px-10">
        <header className="w-full">
          <div className="flex items-center gap-3">
            <div>
              <p className="font-sans text-sm font-semibold text-white"> GLOBAL MARKETS INC.</p>
            </div>
            <div className="h-10 w-[2px] bg-white"></div>
            <div className="">
              <div className="logo flex items-center gap-3">
                <div className="h-8 w-8 bg-[url('/images/favicon.png')] bg-cover bg-center"></div>
                <div>
                  <p className="font-sans text-sm font-bold text-white">JosephSullivan</p>
                  <p className="font-sans text-xs font-normal text-white">Citigroup Trader</p>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>

      <style jsx>{`
        .header-bg {
          background: #4e00ad;
          box-shadow: 0px 12px 24px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </>
  )
}
