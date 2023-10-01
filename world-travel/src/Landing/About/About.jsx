import styled from "styled-components";
import styles from "./about.module.css";
import worldMap from "./worldmap.png";

function About() {
  return (
    <DIV>
      {/* Image for About Us */}

      <div className="container-fluid herosection">
        <div className="row">
          <div className="col-lg-5 d-flex flex-column align-items-center justify-content-beteen">
            <p className="p-3" style={{ color: "white" }}>
              World Travel is a web application that allows travel users to find
              and book accomodation, activities and like-minded around the
              world, and guide users, whether it be travel agents or
              individuals, to post suggestions for them.
            </p>
            <p className="p-3" style={{ color: "white" }}>
              Traveler-users can register, create a personal account, find
              accomodation, work and evants in the search or by category, book a
              trip and pay instantly on the platform.
            </p>
            <p className="p-3" style={{ color: "white" }}>
              Users who want to offer their services as a travelagent or
              homeowner can create a homeowner page and, after verification,
              post their offers to travelers.
            </p>
          </div>
          <div className="col-lg-7 d-flex justify-content-center align-items center">
            <img src={worldMap} className="w-75" alt="world map" />
          </div>
        </div>
      </div>

      {/* <div>
            <img src="https://www.worldtravelsonline.in/static/kandhari/images/about-us.jpg" alt="About pic" />
        </div> */}

      {/* Content About Us */}

      <div className={`${styles.content_div} p-5 mt-4 container`}>
        <p>
          We have great pleasure to introduce ourselves as one of the fastest
          growing Travel Company approved by Govt. of India/ Ministry of Tourism
          having its Head Quarters in Jalandhar Punjab with Branches in North
          India and in Italy (Europe) .We as travel Company started our business
          in 1991,” CELEBRATING THIS YEAR OUR SILVER JUBLI” under the long
          vision of Mr. Anil Kumar kandhari the founder of the Company. His
          vision is to provide quality travel in minimum expenses. In 1997 our
          Agency got Recognition from Air Travel official body IATA
          (International Air Transport Association). As requirement increased in
          year 2003 we started another company in name of M/s Kandhari Travels
          (P) Ltd. To make our presence in the national/ International market,
          we opened branch office in the National Capital New Delhi in 2007.
        </p>
        <p>
          It is our Endeavour to make travel experience smooth and hassle free
          Mr. Kandhari thought of making all travel requirements under one roof
          and to expand our business in the International market so in Feb, 2005
          we started our Overseas Business operation by operating as a GSA for
          Air Slovakia flight for Sector Bergamo(Milan) Amritsar Bergamo(Milan)
          and opened Airlines office at Bergamo Airport. Then in Year 2006 we
          got official license under European Union as per law of the country
          and shifted our office from Airport to Begamo city and finally to
          Romano Di Lombardia (BG). There has been no looking back ever since as
          we have expanded from merely Air Ticketing agency to main consolidator
          of Air Ticketing, after getting IATA Accreditation in 2009 and Holiday
          packages.
        </p>
        <p>
          We have been helping around 350 travelers daily to fulfill their
          travelling dreams by ticketing and tour packages in India and abroad
          with more than seventy five dedicated and satisfied staff allover. We
          as a travel company became a strong bridge between India and Italy We
          almost fill one flight every day from Italy to Asia and vice versa.
          Looking at our consistency and professionalism our clientage increased
          and we got chance to open eight branch offices in Italy. Milan,
          Verolanova, Rome, Venice, Verolanuova, Brescia, Novellara, Suzzara and
          head office in Romano di Lombardia. Covering almost every corner of
          Italy to cater door step services to Asian community, and have
          achieved highest turnover of almost close to INR 700 crores.
        </p>
        <p>
          Our clients have acknowledged excellence and quality in our services,
          with the guarantee that no promises will be broken, that every aspect
          has been taken into account for your enjoyment, and all the hard work
          is done on your behalf. Maintaining quality of service, quality of
          life and value for money we are opening shortly INDO ITALIAN TOURS AND
          TRAVELS in italy This branch will help Indians to explore Europe and
          Europeon to explore India in most potential way.
        </p>
        <h6 className={`${styles.next_Target_heading} mt-4 `}>
          OUR NEXT TARGET IS TO GO ONLINE, INITIALLY B2B AND THEN B2C
        </h6>
      </div>

      <div className={styles.main_cont}>
        <div className={`${styles.cont} p-3 `}>
          <div className={styles.image_div}>
            <div className={styles.img_tag}>
              {/* <img src="https://www.worldtravelsonline.in/static/kandhari/images/we-do.png" alt="WHAT WE DO" /> */}

              <svg
                width="64"
                height="64"
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#2B3B47"
                  d="M379.063 148.114c0 89.948-99.942 83.84-99.942 146.026v.336c0 7.174-5.815 12.989-12.989 12.989h-54.53c-7.174 0-12.989-5.815-12.989-12.989v-3.668c0-96.055 87.727-89.947 87.727-134.921c0-19.433-14.436-31.093-38.311-31.093c-19.423 0-39.271 8.493-57.314 25.851c-4.624 4.448-11.854 4.729-16.907.776l-35.862-28.05c-6.044-4.727-6.745-13.685-1.402-19.193c29.94-30.865 68.846-49.343 120.369-49.343c81.618.001 122.15 43.864 122.15 93.279zm-88.838 260.403c0 27.762-22.209 50.526-50.525 50.526c-27.762 0-50.526-22.764-50.526-50.526c0-27.761 22.764-50.525 50.526-50.525c28.317 0 50.525 22.764 50.525 50.525z"
                />
              </svg>
            </div>
            <h4 className={styles.h2_tag}>WHAT WE DO</h4>
          </div>
          <p>
            The product which we offer to our clients are Domestic &
            International Ticketing, Tour package, Inbound Tour package,
            passport assistance, Visa counseling service i.e. study visa,
            business visa, visitor visa etc. In the past two decade, we have
            gained an excellent reputation for our high quality Service,
            competitive rates, fast delivery and dedicated services that we have
            providing to our customers and sub agents through our Offices in
            India and Abroad.
          </p>
        </div>

        <div className={`${styles.cont} p-3 `}>
          <div className={styles.image_div}>
            <div className={styles.img_tag}>
              {/* <img
                src="https://www.worldtravelsonline.in/static/kandhari/images/company-strength.png"
                alt="COMPANY STRENGTH"
              /> */}
              <svg
                width="64"
                height="64"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="#000000">
                  <path
                    fillRule="evenodd"
                    d="M18.955 1.25c-.433 0-.83 0-1.152.043c-.356.048-.731.16-1.04.47c-.31.309-.422.684-.47 1.04c-.043.323-.043.72-.043 1.152v13.09c0 .433 0 .83.043 1.152c.048.356.16.731.47 1.04c.309.31.684.422 1.04.47c.323.043.72.043 1.152.043h.09c.433 0 .83 0 1.152-.043c.356-.048.731-.16 1.04-.47c.31-.309.422-.684.47-1.04c.043-.323.043-.72.043-1.152V3.955c0-.433 0-.83-.043-1.152c-.048-.356-.16-.731-.47-1.04c-.309-.31-.684-.422-1.04-.47c-.323-.043-.72-.043-1.152-.043h-.09Zm-1.13 1.572l-.002.001l-.001.003a.703.703 0 0 0-.042.177c-.028.21-.03.504-.03.997v13c0 .493.002.787.03.997a.702.702 0 0 0 .042.177l.001.003l.003.001l.003.002l.007.003c.022.009.07.024.167.037c.21.028.504.03.997.03s.787-.002.997-.03a.702.702 0 0 0 .177-.042l.003-.001l.001-.003a.702.702 0 0 0 .042-.177c.028-.21.03-.504.03-.997V4c0-.493-.002-.787-.03-.997a.703.703 0 0 0-.042-.177l-.001-.003l-.003-.001a.704.704 0 0 0-.177-.042c-.21-.028-.504-.03-.997-.03s-.787.002-.997.03a.705.705 0 0 0-.177.042Zm-5.87 1.428h.09c.433 0 .83 0 1.152.043c.356.048.731.16 1.04.47c.31.309.422.684.47 1.04c.043.323.043.72.043 1.152v10.09c0 .433 0 .83-.043 1.152c-.048.356-.16.731-.47 1.04c-.309.31-.684.422-1.04.47c-.323.043-.72.043-1.152.043h-.09c-.432 0-.83 0-1.152-.043c-.356-.048-.731-.16-1.04-.47c-.31-.309-.422-.684-.47-1.04c-.043-.323-.043-.72-.043-1.152V6.955c0-.433 0-.83.043-1.152c.048-.356.16-.731.47-1.04c.309-.31.684-.422 1.04-.47c.323-.043.72-.043 1.152-.043Zm-1.132 1.573l.003-.001l-.003 12.355l-.001-.003a.702.702 0 0 1-.042-.177c-.028-.21-.03-.504-.03-.997V7c0-.493.002-.787.03-.997a.703.703 0 0 1 .042-.177l.001-.003Zm0 12.354l.003-12.355l.003-.002l.007-.003a.705.705 0 0 1 .167-.037c.21-.028.504-.03.997-.03s.787.002.997.03a.704.704 0 0 1 .177.042l.003.001l.001.003a.703.703 0 0 1 .042.177c.028.21.03.504.03.997v10c0 .493-.002.787-.03.997a.702.702 0 0 1-.042.177l-.001.003l-.003.001a.077.077 0 0 1-.01.005a.702.702 0 0 1-.167.037c-.21.028-.504.03-.997.03s-.787-.002-.997-.03a.703.703 0 0 1-.177-.042l-.003-.001ZM4.955 8.25c-.433 0-.83 0-1.152.043c-.356.048-.731.16-1.04.47c-.31.309-.422.684-.47 1.04c-.043.323-.043.72-.043 1.152v6.09c0 .433 0 .83.043 1.152c.048.356.16.731.47 1.04c.309.31.684.422 1.04.47c.323.043.72.043 1.152.043h.09c.433 0 .83 0 1.152-.043c.356-.048.731-.16 1.04-.47c.31-.309.422-.684.47-1.04c.043-.323.043-.72.043-1.152v-6.09c0-.433 0-.83-.043-1.152c-.048-.356-.16-.731-.47-1.04c-.309-.31-.684-.422-1.04-.47c-.323-.043-.72-.043-1.152-.043h-.09Zm-1.13 1.572l-.002.001l-.001.003a.706.706 0 0 0-.042.177c-.028.21-.03.504-.03.997v6c0 .493.002.787.03.997a.704.704 0 0 0 .042.177v.002l.004.002a.703.703 0 0 0 .177.042c.21.028.504.03.997.03s.787-.002.997-.03a.703.703 0 0 0 .177-.042l.003-.001l.001-.003l.002-.004l.003-.006a.704.704 0 0 0 .037-.167c.028-.21.03-.504.03-.997v-6c0-.493-.002-.787-.03-.997a.706.706 0 0 0-.042-.177l-.001-.003l-.003-.001a.705.705 0 0 0-.177-.042c-.21-.028-.504-.03-.997-.03s-.787.002-.997.03a.705.705 0 0 0-.177.042Z"
                    clipRule="evenodd"
                  />
                  <path d="M3 21.25a.75.75 0 0 0 0 1.5h18a.75.75 0 0 0 0-1.5H3Z" />
                </g>
              </svg>
            </div>
            <h4 className={styles.h2_tag}>COMPANY STRENGTH</h4>
          </div>
          <p>
            Today we have over seventy five employees, in Kandhari Group, and
            all are well trained for handling our products i.e. ticketing,
            package and visa services. Most of the staff are well trained and
            have experience of over 25 years to handle the products of company
            more over all have been given ample training from approved training
            agency to best handle our product. Most of the Ticketing staff are
            fluent in speaking both English, Hindi and regional language, thus
            are able to give friendly services
          </p>
        </div>

        <div className={`${styles.cont} p-3`}>
          <div className={styles.image_div}>
            <div className={styles.img_tag}>
              {/* <img
                src="https://www.worldtravelsonline.in/static/kandhari/images/about-indian-market.png"
                alt="ABOUT INDIAN MARKET"
              /> */}
              <svg
                width="64"
                height="64"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#000000"
                  d="M13 9h-2V7h2m0 10h-2v-6h2m-1-9A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2Z"
                />
              </svg>
            </div>
            <h4 className={styles.h2_tag}>ABOUT MARKET</h4>
          </div>
          <p>
            The market have potential, need not to be explained here as the
            world has seen our Economy growing as a one of world fastest growing
            economies. With the growth of the economy, people in India are
            earning far better than they used to earn in the past. Their fatter
            pockets ensure that we in the Travel and Tourism business get our
            chunk of their spending as tourism is an area that entertains all &
            sundry. We traditionally have strong cultural and ethnic ties with
            the European{" "}
          </p>
        </div>
      </div>

      <div className={`${styles.financial_main_div} p-3`}>
        <div className={`${styles.finan_individual_cont} p-3`}>
          <div className="d-flex align-items-center gap-3">
            <svg
              width="60"
              height="60"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#6b7280"
                d="M376 160v32h65.372L252 381.373l-72-72L76.686 412.686l22.628 22.628L180 354.627l72 72l212-211.999V280h32V160H376z"
              />
              <path fill="#6b7280" d="M48 104H16v392h480v-32H48V104z" />
            </svg>
            <h6 className={styles.finan_heading}>ABOUT FINANCIAL CAPACITY</h6>
          </div>
          <div>
            <p>
              The growth which we have achieved over the last decades has result in huge growth in our revenue and profit .our Balance sheet of past few years speaks of what growth we have achieved in past decade. So the company has a quite good position to invest for their further growth story which will take then to new heights. We are also committed to change our Business module and Style with changing time.
            </p>
          </div>
        </div>

        <div className={`${styles.finan_individual_cont} p-3`}>
          <div className="d-flex align-items-center gap-3">
            <svg
              width="60"
              height="60"
              viewBox="0 0 256 256"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#6b7280"
                d="M248 128a56 56 0 1 0-96 39.14V224a8 8 0 0 0 11.58 7.16L192 216.94l28.42 14.22A8 8 0 0 0 232 224v-56.86A55.81 55.81 0 0 0 248 128Zm-56-40a40 40 0 1 1-40 40a40 40 0 0 1 40-40Zm3.58 112.84a8 8 0 0 0-7.16 0L168 211.06v-32.47a55.94 55.94 0 0 0 48 0v32.47ZM136 192a8 8 0 0 1-8 8H40a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h176a16 16 0 0 1 16 16a8 8 0 0 1-16 0H40v128h88a8 8 0 0 1 8 8Zm-16-56a8 8 0 0 1-8 8H72a8 8 0 0 1 0-16h40a8 8 0 0 1 8 8Zm0-32a8 8 0 0 1-8 8H72a8 8 0 0 1 0-16h40a8 8 0 0 1 8 8Z"
              />
            </svg>
            <h6 className={styles.finan_heading}>QUALITY CERTIFICATE</h6>
          </div>
          <div>
            <p>
              As stated earlier, we started our company as a small travel agency in 1991. During last decades we have achieved many of our Goals and earned Recognition from Many agencies. In year 1997 our agency Recognition from Air Travel official body IATA , European IATA in Italy in 2009, India Tourism recognition in 2009. One of theDirector of Sister concern hold's the post of Chairman Punjab Chapter since 2011.
            </p>
          </div>
        </div>

        <div className={`${styles.finan_individual_cont} p-3`}>
          <div className="d-flex align-items-center gap-3">
            <svg
              width="60"
              height="60"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="#6b7280">
                <path
                  fillRule="evenodd"
                  d="M12 15.75a.75.75 0 0 0 .75-.75V4.027l1.68 1.961a.75.75 0 1 0 1.14-.976l-3-3.5a.75.75 0 0 0-1.14 0l-3 3.5a.75.75 0 1 0 1.14.976l1.68-1.96V15c0 .414.336.75.75.75Z"
                  clipRule="evenodd"
                />
                <path d="M16 9c-.702 0-1.053 0-1.306.169a1 1 0 0 0-.275.275c-.169.253-.169.604-.169 1.306V15a2.25 2.25 0 1 1-4.5 0v-4.25c0-.702 0-1.053-.169-1.306a1 1 0 0 0-.275-.275C9.053 9 8.702 9 8 9c-2.828 0-4.243 0-5.121.879C2 10.757 2 12.17 2 14.999v1c0 2.83 0 4.243.879 5.122C3.757 22 5.172 22 8 22h8c2.828 0 4.243 0 5.121-.879C22 20.242 22 18.828 22 16v-1c0-2.829 0-4.243-.879-5.121C20.243 9 18.828 9 16 9Z" />
              </g>
            </svg>
            <h6 className={styles.finan_heading}>CONCLUSION</h6>
          </div>
          <div>
            <p>
              World Travels is now preceding the stage of expanding into an even stronger, solid travel-related company. The expansion plans are being developed in order to face the challenge of the coming international free trade policy as well as the fast growing global travel and tourism activities. In the coming year, the company is expecting to be authorized as the general sales agent by many more airlines in the region.
            </p>
          </div>
        </div>
      </div>
    </DIV>
  );
}
export default About;

const DIV = styled.div`
  .herosection {
    padding-top: 130px;
    padding-bottom: 50px;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    background-color: #567eb9;
  }

  .target {
    text-align: left;
  }

  .heroserction p {
    color: "white";
  }

  h4,
  h6 {
    font-weight: bold;
  }
`;
