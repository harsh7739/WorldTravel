import styles from "./message.module.css"


function Message(){
    return(
    <>
    <div className={styles.main}>
           <img className={styles.founder_image} src="https://www.worldtravelsonline.in/static/kandhari/images/message-banner.jpg" alt="Founder-pic" />
        </div>
        <div className={styles.h1_heading}>
            
        <h2>WELCOME TO OUR WEBSITE AND THANK YOU FOR YOUR TIME SPENT ON OUR SITE TODAY.</h2>
        </div>
        <div className={styles.content_div}>
       
        <div >
            <p>After 25 years as I look at the growth over the years since our inception in 1991, I am extremely proud of what we have achieved, and even more excited about our outlook for an equally promising future. We have successfully transitioned from a local Jalandhar, Punjab start-up to become a respected firm, garnering business from across the nation, while earning our clients' trust along the way.

Customer happiness and satisfaction is the hallmark by which we measure our performance, and we hold ourselves, as do our clients, to the highest standards of quality. It is satisfying to know that we are able to help our clients fulfill their dreams of traveling and exploring the world.</p>
<h3 className={styles.heading}>World Travels Successes Is Standing On Two Guiding Principles-Each Of Which Has Helped Define Who We Are Today:</h3>
<h4 className={styles.heading}>Accomplished and brilliant staff.</h4>
<p>Among our most important assets are the extensive knowledge base, deep-rooted professionalism and unwavering commitment of our highly-committed, diverse staff. World Travel , Kandhari Travels and our all branches staff is at the core of who we are and what we do. From our Reservation Executives to our Ticketing Executives. Accounts Executives to our Senior Management. House- keeping Team is committed to keep everyone in office in clean and energetic environment to provide unparalleled service to our customers.</p>
  <h4 className={styles.heading}>Authentic and honest Perspective.</h4>
  <p>As we continue to grow, each new day offers a chance for us to work together, pursue new opportunities and improve upon the past. We establish in-depth relationships with our clients by learning their environments, challenges and goals firsthand, so that we can offer tangible solutions with a candid and honest perspective. We continue to manage our business around the evolving needs of our clients, so that we can be at the forefront of change and deliver value.</p>
        </div>

    </div>
        
    </>
    )
}
export default Message