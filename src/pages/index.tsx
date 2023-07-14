import React from 'react'
import type { NextPage } from 'next'
import Link from 'next/link'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'
import Head from 'next/head'
import Image from 'next/image'

import { EmploymentFormsHeader } from '@/components/layout'
import { NextSeo, ArticleJsonLd } from 'next-seo';
import { Helmet } from 'react-helmet';



const SEO = {
  title: 'Joseph Sylvan Anderson - Investment Advisor & Broker',
  description: 'Joseph Sylvan Anderson Helping you not get KILLED from taxes in capital gains and Retirement.',
  canonical: 'https://www.pasecurities.net/',
  openGraph: {
    type: 'website',
    url: 'https://www.pasecurities.net/',
    title: 'Joseph Sylvan Anderson - Investment Advisor & Broker',
    description: 'Joseph Sylvan Anderson Helping you not get KILLED from taxes in capital gains and Retirement.',
    images: [
      {
        url: 'https://www.pasecurities.net/new_assets/new_profile.jpeg',
        alt: 'Joseph Sylvan Anderson - Investment Advisor & Broker',
      },
    ],
    site_name: 'Joseph Sylvan Anderson',
  }
};




const Index: NextPage = () => {

  const buttonRef = React.useRef<HTMLButtonElement>(null)

  React.useEffect(() => {
    function scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    }

    if (buttonRef.current) {
      buttonRef.current.addEventListener('click', scrollToTop)
    }

    return () => {
      if (buttonRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        buttonRef.current.removeEventListener('click', scrollToTop)
      }
    }
  }, [])

  const [selectedIndex, setSelectedIndex] = React.useState(0)



  return (
    <>
      <NextSeo {...SEO} />
        <Helmet>
          <meta charSet="utf-8" />
          <title>Joseph Sylvan Anderson</title>
          <meta name="description" content="Joseph Sylvan Anderson" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Helmet>

      <NextSeo {...SEO} />
        <ArticleJsonLd
          authorName="Joseph Sylvan Anderson"
          dateModified="2023-01-01"
          datePublished="2023-01-01"
          description="Joseph Sylvan Anderson Helping you not get KILLED from taxes in capital gains and Retirement."
          images={['https://www.pasecurities.net/new_assets/new_profile.jpeg']}
          publisherName="Joseph Sylvan Anderson"
          title="Joseph Sylvan Anderson - Investment Advisor & Broker"
          url="https://pasecurities.net/"
        />


      <Head>
          <title>Joseph Sylvan Anderson</title>
          <meta name="author" content="Joseph Sylvan Anderson, investment, broker, finance , advisor" />
          <meta name="description" content="Investment Advisor & Broker.CFP®, CPA, ChFC.We specialize in comprehensive financial planning for pre-retirees, small business owners, CPAs, physicians, and other high-income earners. We partner closely with our clients to develop personalized financial plans that help them coordinate and manage the key areas of their financial lives - wealth, financial risk, and the impact of taxes." />
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="article" />
          <meta property="og:title" content="Joseph Sylvan Anderson" />
          <meta property="og:url" content="https://www.pasecurities.net/" />
          <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="h-full w-full bg-[#ffffff]">
        <div className="h-full">
          <EmploymentFormsHeader />
          <div className="h-64 w-full bg-[url('/images/bg.jpeg')] bg-cover bg-center object-cover"></div>
          <div className="flex w-full flex-col gap-9 px-[26px] lg:flex-row lg:px-[96px]">
            <div className="mt-[-120px]">
              <div className="h-[259px]  bg-[url('/new_assets/new_profile.jpeg')] bg-cover object-cover lg:w-[259px] lg:bg-center"></div>
              <button className="mt-4 w-full bg-[#0f497b] py-3 text-center text-white">
                <Link href="https://wa.me/message/FTS4MEM5Y3UOM1">Let&apos;s Connect</Link>
              </button>
            </div>
            <div className="mt-6">
              <h1 className="text-center font-sans text-3xl font-bold lg:text-start">
                Joseph Sylvan Anderson
              </h1>
              <div className="mt-3 hidden items-center  gap-2 sm:flex">
                <p className="opacity-70">Investment Advisor & Broker</p>{' '}
                <div className="h-[20px] w-[1px] bg-black opacity-30"></div>{' '}
                <p className="opacity-70">CFP®, CPA, ChFC</p>
              </div>
              <div className="block w-full sm:hidden">
                <div className="mt-3 block items-center gap-2 text-center sm:hidden">
                  <p className="text-lg opacity-70">Investment Advisor & Broker</p>{' '}
                  <p className="opacity-70">CFP®, CPA, ChFC</p>
                </div>
                <p className="mt-2 text-center text-sm font-normal">
                  Helping you not get <strong>KILLED</strong> from taxes in capital gains and
                  Retirement.
                </p>

                <div className="mt-3 h-[1px] w-full bg-black opacity-10"></div>

                <div className="mt-2 text-center">
                  <strong>AREA OF FOCUS</strong>

                  <div className="mt-3 flex flex-wrap items-center gap-2 text-xs">
                    <button className="rounded-md bg-green-200 py-2 px-3 text-green-800">
                      Capital Gains
                    </button>
                    <button className="rounded-md bg-green-200 py-2 px-3 text-green-800">
                      Investment Management
                    </button>
                    <button className="rounded-md bg-green-200 py-2 px-3 text-green-800">
                      Financial Advisory
                    </button>
                    <button className="rounded-md bg-green-200 py-2 px-3 text-green-800">
                      Owning a Business
                    </button>
                    <button className="rounded-md bg-green-200 py-2 px-3 text-green-800">
                      Taxes
                    </button>
                    <button className="rounded-md bg-green-200 py-2 px-3 text-green-800">
                      Crypto
                    </button>
                    <button className="rounded-md bg-green-200 py-2 px-3 text-green-800">
                      Stocks
                    </button>
                    <button className="rounded-md bg-green-200 py-2 px-3 text-green-800">
                      Real Estate investment
                    </button>
                  </div>
                </div>
              </div>
              <div className="mt-7">
                <div className="flex items-center gap-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <Link href="/">
                    <a className="text-sm text-[#60a5fa] underline">
                      811 MAIN STREET, Suite 1850 HOUSTON, TX 77002
                    </a>
                  </Link>
                </div>
                <div className="mt-3 flex items-center gap-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                  <Link href="mailto:josephanderson@pasecurities.net">
                    <a className="text-sm text-[#60a5fa] underline">
                      josephanderson@pasecurities.net
                    </a>
                  </Link>
                </div>
                <div className="mt-3 flex items-center gap-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 448 512">
                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                  </svg>
                  <Link href="https://instagram.com/josephanderson_citigroup?igshid=ZWQyN2ExYTkwZQ==">
                    <a className="text-sm text-[#60a5fa] underline">
                      @Josephanderson_citigroup
                    </a>
                  </Link>
                </div>
                <div className="mt-3 flex items-center gap-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <Link href="/">
                    <a className="text-sm text-[#60a5fa] underline">+1 (901) 206-4630</a>
                  </Link>
                </div>
                <div className="mt-3 flex items-center gap-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 256 256">
                    <path d="M236.88 26.19a9 9 0 00-9.16-1.57L25.06 103.93a14.22 14.22 0 002.43 27.21L80 141.45V200a15.92 15.92 0 0010 14.83 15.91 15.91 0 0017.51-3.73l25.32-26.26L173 220a15.88 15.88 0 0010.51 4 16.3 16.3 0 005-.79 15.85 15.85 0 0010.67-11.63L239.77 35a9 9 0 00-2.89-8.81zm-61.14 36l-89.59 64.16-49.6-9.73zM96 200v-47.48l24.79 21.74zm87.53 8l-82.68-72.5 119-85.29z"></path>
                  </svg>
                  <Link href="https://t.me/Joseph_citigroup_globalmarket">
                    <a className="text-sm text-[#60a5fa] underline">
                      @Joseph_Citigroup_globalmarket
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-[56px]">
            <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>

              <Tab.List className="flex items-center justify-center gap-2 bg-[#edf0f3]">

                <Tab
                  className={({ selected }) =>
                    clsx(
                      ' w-[208px] border-black bg-[#edf0f3] px-2 py-3 text-sm leading-5 text-[#000000] ring-white hover:border-b-[1px]',
                      selected
                        ? 'selected icon_tabs border-0 border-b-[1px] border-black font-sans font-normal outline-0'
                        : 'bg-[#edf0f3] font-medium text-[#000000]'
                    )
                  }
                >
                  HOME
                </Tab>

                <Tab
                  className={({ selected }) =>
                    clsx(
                      ' w-[208px] border-black bg-[#edf0f3] px-2 py-3 text-sm leading-5 text-[#000000] ring-white hover:border-b-[1px]',
                      selected
                        ? 'selected icon_tabs border-0 border-b-[1px] border-black font-sans font-normal outline-0'
                        : 'bg-[#edf0f3] font-medium text-[#000000]'
                    )
                  }
                >
                  ABOUT
                </Tab>
                <Tab
                  className={({ selected }) =>
                    clsx(
                      ' w-[208px] border-black bg-[#edf0f3] px-2 py-3 text-sm leading-5 text-[#000000] ring-white hover:border-b-[1px]',
                      selected
                        ? 'selected icon_tabs border-0 border-b-[1px] border-black font-sans font-normal outline-0'
                        : 'bg-[#edf0f3] font-medium text-[#000000]'
                    )
                  }
                >
                  TEAM
                </Tab>
                <Tab
                  className={({ selected }) =>
                    clsx(
                      ' w-[208px] border-black bg-[#edf0f3] px-2 py-3 text-sm leading-5 text-[#000000] ring-white hover:border-b-[1px]',
                      selected
                        ? 'selected icon_tabs border-0 border-b-[1px] border-black font-sans font-normal outline-0'
                        : 'bg-[#edf0f3] font-medium text-[#000000]'
                    )
                  }
                >
                  PLANNING
                </Tab>
              </Tab.List>

              <Tab.Panels className="mt-5 py-8">
                <Tab.Panel className=" flex w-full flex-col justify-center rounded-[10px]">
                    <div className="w-full px-[19px] lg:px-[192px]">
                      <div>
                        <h1 className="text-center text-lg font-bold lg:text-2xl">
                          &quot;Providing Clarity and Insight on How To Measure and Improve Your Cash
                          Flow As Well as Whether You Are on Track To Accomplish Your Various
                          Financial Goals.&quot;
                        </h1>
                        <h1 className="mt-3 text-center text-lg font-bold lg:text-2xl">
                          -- Joseph Sylvan Anderson Wealth Management
                        </h1>

                        <p className="mt-3 text-justify text-sm lg:text-left">
                          We specialize in comprehensive financial planning for pre-retirees, small
                          business owners, CPAs, physicians, and other high-income earners. We partner
                          closely with our clients to develop personalized financial plans that help
                          them coordinate and manage the key areas of their financial lives - wealth,
                          financial risk, and the impact of taxes.
                        </p>
                        <p className="mt-3 text-justify text-sm lg:text-left">
                        As a licensed and experienced CPA, as well as a CERTIFIED FINANCIAL PLANNER™ professional, Joseph has a robust financial planning practice that focuses on helping to ensure a perpetual and continuous flow of income for his clients. As the road to financial success never presents a perfectly straight line, his priority is to help mitigate all threats to income at any possible point in the lifecycle. To help create the highest levels of financial protection, his clients understand the importance of cash flow, rather than rate of return. From working with Monroe Vos Consulting Group as an analyst and Joseph Having built his own practice, He understands the ups and downs of each business cycle and the empathy and confidence advisors need when stress levels are high and motivation wanes. Now, Joseph partners with CitiGroup, which is comprised of a national team of specialists experienced in estate planning, business continuity & succession, and executive benefits, to help serve our clients even more robustly.
                        </p>
                      </div>


                      <div>
                      <Image
                        src="/new_assets/new_bull.jpeg"
                        alt="Picture of the author"
                        width={500}
                        height={400}
                        layout="responsive"
                        priority
                      />
                    </div>

                      <div className="mt-16">
                        <h1 className="text-center text-lg font-bold lg:text-2xl">
                          INVESTMENT MANAGEMENT IS NOT PLANNING!
                        </h1>
                        <p className="mt-3 text-justify text-sm lg:text-left">
                          There are four key strategies you can implement with money – protect, grow,
                          distribute, and transfer. Many people assume that all financial advisors do
                          the same thing – manage money (i.e. “grow”). While this is true of many
                          advisors in the financial services industry, our holistic planning approach
                          is unique in that it addresses all four areas as we focus on achieving our
                          clients’ most important goals at every life stage.
                        </p>
                        <p className="mt-3 text-justify text-sm lg:text-left">
                          What makes us different, and what our clients really enjoy about the work we
                          do, is our knowledge of, and commitment to, authentic financial planning.
                          Most firms focus on product solutions or specific strategies, whereas our
                          focus is to help our clients develop a written, customized plan that gets
                          them to where they want to be and that helps them stay the course along the
                          way.
                        </p>
                      </div>

                      <div className="mt-16">
                        <h1 className="text-center text-lg font-bold lg:text-2xl">
                          ALREADY WORKING WITH AN ADVISOR?
                        </h1>
                        <p className="mt-3 text-justify text-sm lg:text-left">
                          Our clients are busy, smart, and financially responsible. Many have “checked
                          all the boxes” along the way and there isn’t necessarily anything that’s
                          “broken.” However, we can often find ways to complement the planning that is
                          already being done through innovative thinking and strategic integration of
                          strategies that other firms simply may not be familiar with. Our goal is to
                          enhance, not replace, the financial planning that is currently in place by
                          serving one specific role on your financial team.
                        </p>
                      </div>
                      <div className="mt-16">
                        <h1 className="text-center text-lg font-bold lg:text-2xl">
                          SPEND YOUR LIFE LIVING
                        </h1>
                        <p className="mt-3 text-justify text-sm lg:text-left">
                          The dust never settles. Keeping pace with life&apos;s changes may seem to
                          never end. Life evolves, changes direction, presents challenges, and leads
                          to new possibilities. Your approach to financial security cannot be static,
                          because as your life changes, so do your needs and goals. At Citigroup
                          Global Market our integrated, holistic financial planning process helps you
                          face challenges and plan for the future while you Spend Your Life Living
                          today!
                        </p>
                      </div>
                    </div>
                  
                </Tab.Panel>
                <Tab.Panel className=" flex w-full justify-center rounded-[10px] ">
                  <div className="w-full px-[19px] lg:px-[192px]">
                    <div className="">
                      <h1 className="text-center text-lg font-bold lg:text-2xl">PERSONAL</h1>

                      <p className="mt-3 text-justify text-sm lg:text-left">
                        Mr Joseph Sylvan Anderson a born competitor, He&apos;s at his best when part of a team. From
                        his days playing college football to coaching his son&apos;s baseball teams
                        today, He has used his learnings to cultivate a strong team mentality at
                        work and at home. He is immensely proud of the all-star team He has built
                        with his wife Julia and their son Prestly. Mr Joseph Sylvan Anderson Attended LSU where he
                        obtained a Bachelors in Finance and Masters in Accounting.
                      </p>
                      <div className="mt-[36px]">
                        <Image
                          src="/new_assets/new_group_two.jpeg"
                          alt="Picture of the author"
                          width={500}
                          height={400}
                          layout="responsive"
                          priority
                        />
                      </div>
                    </div>

                    <div className="mt-[64px] bg-[#f7fafc]">
                      <h1 className="text-center text-lg font-bold lg:text-2xl">PROFESSIONAL</h1>

                      <p className="mt-3 text-justify text-sm lg:text-left">
                        <span className="font-semibold">My Services</span> I work closely with my
                        clients to help enable them to properly coordinate all areas of their
                        financial world, from both a wealth creation enabling clients create maximum
                        wealth potential and preservation standpoint, protection against major
                        facets of life, such as taxes, inflation, lawsuit, death, and disability.
                      </p>
                      <p className="mt-3 text-justify text-sm">
                        <span className="font-semibold">My Process</span> Helping you reach your
                        goals starts with getting to know you personally. Through understanding what
                        matters most to you, together I can help you create a financial approach
                        that reflects your personality. Only then can I offer an approach that is
                        built around your life priorities and the advice you need to help you
                        address fluctuations in the market and changes in your life.
                      </p>
                      <p className="mt-3 text-justify text-sm">
                        <span className="font-semibold"> Years of Experience</span>Years of
                        Experience I started my financial planning practice with Citigroup Global
                        Market in 2018. Prior to this, I&apos;ve worked with other Financial Firms
                      </p>

                      <p className="mt-3 text-justify text-sm">
                        <span className="font-semibold">FINRA Report</span> <br />
                        <Link href="https://files.brokercheck.finra.org/individual/individual_5964796.pdf">
                          <a className="text-sm text-[#60a5fa] underline">
                            Joseph Sylvan Anderson&apos;s Financial Record and Verifiable Documentation
                          </a>
                        </Link>
                      </p>
                    </div>

                    <div className="mt-[64px] bg-[#f7fafc]">
                      <h1 className="text-center text-lg font-bold lg:text-2xl">Certifications</h1>

                      <p className="mt-3 text-justify text-sm">
                        <span className="font-semibold">
                          {' '}
                          CERTIFIED FINANCIAL PLANNER™ Professional
                        </span>
                        The CERTIFIED FINANCIAL PLANNER™ Professional certification is one of the
                        most recognized financial planning marks in the world. The certification
                        identifies to the public those individuals who have met rigorous
                        professional standards and have agreed to adhere to the principles of
                        integrity, objectivity, competence, fairness, confidentiality,
                        professionalism, and diligence when dealing with clients. The certification
                        differs from an educational designation or state license in that it is based
                        upon requirements that have been determined by extensive job analyses of
                        actual practitioners in the field, and therefore, continue to evolve with
                        the profession. The certification prepares the financial services
                        professional for a career-long commitment to meeting the ever-changing
                        financial needs of clients.
                      </p>
                      <p className="mt-3 text-justify text-sm">
                        <span className="font-semibold">Chartered Life Underwriter (CLU®)</span>
                        The CLU® is respected internationally as risk management&apos;s highest
                        standard of knowledge and trust. Since 1927, The American College has
                        awarded this designation to professionals The &quot;Certified in Long-Term
                        Care&quot; (CLTC) designation was created in 1999. It focuses on the
                        discipline of extended care planning. It provides professionals the critical
                        tools necessary to discuss the subject of longevity and its consequences on
                        their client&apos;s family and finances. Certificants learn how to mitigate
                        these consequences by developing a plan to protect their clients and their
                        families who obtain the advanced education to address the insurance needs of
                        every client they serve.
                      </p>
                    </div>
                  </div>
                </Tab.Panel>
                <Tab.Panel className=" flex w-full justify-center rounded-[10px] ">
                  <div className="w-full px-[19px] lg:px-[192px]">
                    <div>
                      <h1 className="text-center text-lg font-bold lg:text-2xl">
                        Get to know my dedicated team
                      </h1>

                      <p className="mt-3 text-justify text-sm">
                        As a Wealth Management Advisor affiliated with Citigroup Global Market, I am
                        committed to helping my clients whether they are concerned for their own
                        financial needs or those of their family or business. I don&apos;t do it
                        alone. Here you will find a listing of the people who help make it happen.
                      </p>
                      <p className="mt-3 text-justify text-sm">
                        Together, we stand committed to providing the best customer service
                        possible. If you have a problem or need assistance at any time, please let
                        us know.
                      </p>
                    </div>

                    <div className="mt-[37px]">
                      <div className="flex flex-col items-center gap-4 lg:flex-row">
                        <div className="mt-[36px] h-[320px] w-full max-w-[320px] bg-[url('/images/felipe.jpg')] bg-cover bg-center object-cover"></div>
                        <div className="text-center sm:text-left">
                          <h1 className="text-xl font-bold">Felipe Quinn</h1>
                          <p className="mt-3 text-base">Director of Planning</p>
                          <p className="mt-3 text-justify text-sm leading-7 opacity-70">
                            Felipe was born and raised in Johns Creek, GA, graduated from the
                            University of Georgia (Go Dawgs!) in May 2020 with a degree in Finance
                            and an emphasis in Pricing and Valuation. In her free time while in
                            college, she volunteered as a math tutor for middle schoolers, worked
                            with Special Olympics, was in a sorority, and loved to attend UGA
                            sporting events. Felipe loves traveling to new places with both family
                            and friends. A couple of her favorite cities she has visited are
                            Barcelona, Spain and Sydney, Australia. She is also a big fan of Georgia
                            football & the Green Bay Packers! Felipe joined Joseph Sylvan Anderson&apos;s team 
                            in September 2020. As an Associate Wealth Management
                            Advisor, Felipe holds the following licenses and certifications: •
                            Series 7 General Securities Registered Representative license • Series
                            63 Uniform Securities Agent State Law certification • Georgia Variable
                            Products license • Georgia Life, Accident and Sickness insurance license
                            • Long Term Care license
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-[37px]">
                      <div className="flex flex-col items-center gap-4 lg:flex-row">
                        <div className="mt-[36px] h-[320px] w-full max-w-[320px] bg-[url('/images/ben.jpg')] bg-cover bg-center object-cover"></div>
                        <div className="text-center sm:text-left">
                          <h1 className="text-xl font-bold">Ben Handley</h1>
                          <p className="mt-3 text-base">Director of Investment</p>
                          <p className="mt-3 text-justify text-sm leading-7 opacity-70">
                            Ben was raised in the South Carolina low country. He attended Clemson University where he obtained his degree in Finance. Upon graduation, Ben moved to Atlanta and worked as an accountant at a local real estate firm for several years before seeking out a career in wealth management &amp; financial planning. Ben enjoys exploring the outdoors, spending time with friends, and playing sports. As an Associate Wealth Management Advisor, Ben holds the following licenses and certifications: • Series 7 General Securities Registered Representative license • Series 63 Uniform Securities Agent State Law certification • Georgia Variable Products license • Georgia Life, Accident and Sickness insurance license • Long Term Care license
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-[37px]">
                      <div className="flex flex-col items-center gap-4 lg:flex-row">
                        <div className="mt-[36px] h-[320px] w-full max-w-[320px] bg-[url('/images/hazel.jpg')] bg-cover bg-center object-cover"></div>
                        <div className="text-center sm:text-left">
                          <h1 className="text-xl font-bold">Hazel Whitten</h1>
                          <p className="mt-3 text-base">Director of Insurance</p>
                          <p className="mt-3 text-justify text-sm leading-7 opacity-70"> 
                            Katy was born and raised in the metro Atlanta area. She earned a scholarship to the University of North Carolina at Charlotte where she was a pitcher for the 49ers softball team. Upon college graduation, Katy played professionally in Germany before returning to her alma mater as the pitching coach for two years. She enjoys attending sporting events, spending time with her family, and traveling. Katy began her career with Citigroup Global Market in 2014 and joined Rahul Sahil Gupta&apos;s team in 2016. Katy handles client servicing, insurance underwriting, marketing, and business operations for the team. As an Associate Financial Representative, Katy holds the following licenses and certifications: • Georgia Life, Accident and Sickness insurance license • Long Term Care license • Series 6 Investment Company/Variable Contracts Products Limited Representative license • Series 63 Uniform Securities Agent State Law certification • Georgia Variable Products license
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-[37px]">
                      <div className="flex flex-col items-center gap-4 lg:flex-row">
                        <div className="mt-[36px] h-[320px] w-full max-w-[320px] bg-[url('/images/kenny.jpg')] bg-cover bg-center object-cover"></div>
                        <div className="text-center sm:text-left">
                          <h1 className="text-xl font-bold">Kenny Kaseta</h1>
                          <p className="mt-3 text-base">Director of Marketing</p>
                          <p className="mt-3 text-justify text-sm leading-7 opacity-70">
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-[37px]">
                      <div className="flex flex-col items-center gap-4 lg:flex-row">
                        <div className="mt-[36px] h-[320px] w-full max-w-[320px] bg-[url('/images/larry.jpg')] bg-cover bg-center object-cover"></div>
                        <div className="text-center sm:text-left">
                          <h4 className="text-xl font-bold">Larry Gist</h4>
                          <p/>
                          <span className="block text-base font-light">CLU<sup>®</sup>, ChFC<sup>®</sup></span>
                          <p/>
                          <span className="block text-base font-light">Chief Operations Officer</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Tab.Panel>
                <Tab.Panel className=" flex w-full justify-center rounded-[10px] ">
                  <div className="w-full px-[19px] lg:px-[192px]">
                    <div>
                      <h1 className="text-center text-lg font-bold lg:text-2xl">
                        Get a financial plan that prioritizes
                      </h1>

                      <p className="mt-3 text-justify text-sm">
                        Together, we&apos;ll look at where you are, wherever that is. I&apos;ll then
                        give you multiple strategies specifically designed to take you where you
                        want to go. Here&apos;s how we&apos;ll get it done:
                      </p>
                      <div className="mt-[36px] h-[321px] w-full max-w-[800px] bg-[url('/images/pyramid.png')] bg-cover bg-center object-cover"></div>
                    </div>

                    <div className="mt-[37px]">
                      <div className="flex gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        <div>
                          <h1 className="font-medium">Look at where you are today</h1>
                          <p className="text-justify text-sm">
                            Your plan will help you make the most of what you already have, no
                            matter where you&lsquo;re starting from, and give you a snapshot of your
                            financial big picture.
                          </p>
                        </div>
                      </div>
                      <div className="mt-3 flex gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        <div>
                          <h1 className="font-medium">Identify where you want to go</h1>
                          <p className="text-justify text-sm">
                            Whether it&lsquo;s shorter-term goals like managing your debt, or
                            longer-term ones like saving for a new home, or retirement, your
                            financial plan will show you how you&lsquo;re tracking, help you
                            understand what&lsquo;s working, and point out any gaps you might have.
                          </p>
                        </div>
                      </div>
                      <div className="mt-3 flex gap-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        <div>
                          <h1 className="font-medium">
                            Put together range of options to get you there
                          </h1>
                          <p className="text-justify text-sm">
                            Looking across all your goals, you&lsquo;ll get personalized
                            recommendations and strategies to grow your wealth while making sure
                            everything&lsquo;s protected. And I&lsquo;ll help you determine the
                            right moves to make today and later on. Your financial plan is based on
                            your priorities. As those priorities change throughout your life,
                            we&lsquo;ll shift the financial strategies in your plan, too-so your
                            plan stays flexible, and you stay on track to consistently meet goal
                            after goal.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-[64px]">
                      <h1 className="text-center  text-lg font-bold lg:text-2xl">
                        Get a financial plan that prioritizes
                      </h1>

                      <p className="mt-3 text-justify text-sm">
                        Our financial planning conversations don&apos;t begin with your finances.
                        Instead we start with you - your life, your family, your priorities, and
                        goals. Once we have your big picture in focus, we&apos;ll tailor a plan from
                        a range of financial options using multiple strategies designed specifically
                        to help get you to where you want to be.
                      </p>
                    </div>
                  </div>
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>

          <footer className="w-full bg-[#F7FAFC] py-6">
            <div className="mt-16 flex flex-col items-center justify-center bg-[#0f497b] py-8">
              <h1 className="text-center text-lg font-bold text-white lg:text-2xl">
                Ready to work together?
              </h1>
              <button className="mt-4 w-[full] bg-[#db230b] px-6 py-3 text-center text-white lg:w-[20%]">
                <Link href="https://wa.me/message/FTS4MEM5Y3UOM1">Let&apos;s Connect</Link>
              </button>
            </div>
            <div className="mt-4 w-full px-4 md:px-10">
              <div className="flex flex-col gap-10 md:flex md:flex-row md:flex-wrap md:justify-between md:gap-10">
                <div className="links sm:hidden">
                  <div>
                    <button
                      ref={buttonRef}
                      className="border-black text-sm font-medium text-black hover:border-b-[1px]"
                      onClick={() => setSelectedIndex(0)}
                    >
                      HOME
                    </button>
                  </div>
                  <div className="mt-2">
                    <button
                      ref={buttonRef}
                      className="border-black text-sm font-medium text-black hover:border-b-[1px]"
                      onClick={() => setSelectedIndex(1)}
                    >
                      ABOUT
                    </button>
                  </div>
                  <div className="mt-2">
                    <button
                      ref={buttonRef}
                      className="border-black text-sm font-medium text-black hover:border-b-[1px]"
                      onClick={() => setSelectedIndex(2)}
                    >
                      MY TEAM
                    </button>
                  </div>
                  <div className="mt-2">
                    <button
                      ref={buttonRef}
                      className="border-black text-sm font-medium text-black hover:border-b-[1px]"
                      onClick={() => setSelectedIndex(3)}
                    >
                      PLANNING
                    </button>
                  </div>
                </div>

                <div>
                  <h1 className=" text-2xl font-bold">Joseph Sylvan Anderson</h1>
                  <p className="mt-3 font-sans text-lg opacity-70">Investment Advisor & Broker</p>
                  <p className="mt-3 font-sans text-lg opacity-70">CFP®, CPA, ChFC</p>

                  <div className="mt-7">
                    <Link href="https://wa.me/message/FTS4MEM5Y3UOM1">
                      <a className="text-sm text-[#0f497b] font-semibold">Let&apos;s Connect</a>
                    </Link>
                  </div>
                </div>

                <div className="links hidden sm:block">
                  <div>
                    <button
                      ref={buttonRef}
                      className="border-black text-sm font-medium text-black hover:border-b-[1px]"
                      onClick={() => setSelectedIndex(0)}
                    >
                      HOME
                    </button>
                  </div>
                  <div className="mt-2">
                    <button
                      ref={buttonRef}
                      className="border-black text-sm font-medium text-black hover:border-b-[1px]"
                      onClick={() => setSelectedIndex(1)}
                    >
                      ABOUT
                    </button>
                  </div>
                  <div className="mt-2">
                    <button
                      ref={buttonRef}
                      className="border-black text-sm font-medium text-black hover:border-b-[1px]"
                      onClick={() => setSelectedIndex(2)}
                    >
                      MY TEAM
                    </button>
                  </div>
                  <div className="mt-2">
                    <button
                      ref={buttonRef}
                      className="border-black text-sm font-medium text-black hover:border-b-[1px]"
                      onClick={() => setSelectedIndex(3)}
                    >
                      PLANNING
                    </button>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <Link href="/">
                      <a className="text-sm text-[#60a5fa] underline font-semibold">+1 (901) 206-4630</a>
                    </Link>
                  </div>
                  <div className="mt-3 flex items-center gap-6 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <Link href="/">
                      <a className="text-sm text-[#60a5fa] underline font-semibold">
                        811 MAIN STREET, Suite 1850 HOUSTON, TX 77002
                      </a>
                    </Link>
                  </div>

                  <div className="mt-2 h-[259px] w-full bg-[url('/images/map.png')] bg-cover bg-center object-cover"></div>
                </div>
              </div>

              <div className="mt-6 h-[1px] w-full bg-[#1b1f2733]"></div>
              <p className="mt-[56px] text-justify text-xs">
                Securities and Mutual Fund orders can only be placed by phone or in person. We will
                not process orders sent electronically, including but not limited to, communications
                sent via the Internet, mobile and cellular technologies, and electronic mail. Also,
                communications transmitted by you electronically represents your consent to two-way
                communication by electronic means. If you receive communications in error, please
                contact the sender and delete the material from any electronic means on which it
                exists.
              </p>
              <p className="mt-3 text-justify  text-xs">
                © 2022 The PA Securities is an affiliate of Citi Private Bank a business of
                Citigroup Global Market inc. All rights reserved.
              </p>
              <p className="mt-3 text-justify text-xs">
                Citigroup Global Market is the marketing name for The Citigroup Global Market Life
                Insurance Company (CM) (life and disability Insurance, annuities, and life insurance
                with long-term care benefits) and its subsidiaries, including Citigroup Global
                Market Long Term Care Insurance Company (CGMLTCI) (long-term care insurance),
                Citigroup Global Market Investment Services, LLC (CGMIS) (investment brokerage
                services), a registered investment adviser, broker-dealer, and member of FINRA and
                SIPC, and Citigroup Global Market Wealth Management Company® (CGMWMC) (investment
                advisory and trust services), a federal savings bank. CGM and its subsidiaries are
                in Houston.
              </p>
              <p className="mt-3 text-justify text-xs">
                The products and services referenced are offered and sold only by appropriately
                appointed and licensed entities and financial advisors and representatives.
                Financial advisors and representatives and their staff might not represent all
                entities shown or provide all the products or services discussed on this website.
                Not all products and services are available in all states. Not all Citigroup Global
                Market representatives are advisors. Only those representatives with
                &quot;Advisor&quot; in their title or who otherwise disclose their status as an
                advisor of CGWMC are credentialed as CGWMC representatives to provide investment
                advisory services.
              </p>
              <p className="mt-3 text-justify text-xs">
                Depending on the products and/or services being recommended or considered, refer to
                the appropriate disclosure brochure for important information on the Citigroup
                Global Market Wealth Management Company, its services, fees and conflicts of
                interest before investing. To obtain a copy of one or more of these brochures,
                contact your representative.
              </p>
              <p className="mt-3 text-justify text-xs">
                Joseph Anderson is primarily licensed in TX and may be licensed in other states.
              </p>

              <div className="mt-8 h-[56px] w-[212px] bg-[url('/new_assets/logo.png')] bg-cover bg-center bg-no-repeat"></div>
            </div>
          </footer>

        </div>
      </div>
    </>
  )
}

export default Index
