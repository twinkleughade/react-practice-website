
const Hero =()=>{
    return(
        <>
        <section id="sidefixed">
            <div><a href="https://www.Linkedin.com/twinklethakre"><i class="fa-brands fa-linkedin"></i></a><br />Linkedin</div>
            <div><a href="https://www.Facebook.com/tinklethakre"><i class="fa-brands fa-facebook"></i></a><br />Facebook</div>
            <div><a href="https://www.Whatsapp.com/6267002715"><i class="fa-brands fa-whatsapp"></i></a><br />Whatsapp</div>
            <div><a href="https://www.instagram.com/twinklethakre"><i class="fa-brands fa-instagram"></i></a><br />Instagram</div>
         </section>
        
         <section id="topnav">
            <article>
               <div><img src="sunrise.jpg" alt="" /></div>
            </article>
            <article>
               <div><a href="#hero1">Home</a></div>
               <div><a href="#hero2">About</a></div>
               <div><a href="#hero3">Registration</a></div>
               <div><a href="#hero4">Classes</a></div>
               <div><a href="#hero5">Methedology</a></div>
            </article>
         </section>

         <section className="hero" id="hero1">
            <article>
                <div id="div1">Welcome to playhouse</div><br/>
                <div id="div2">Learn & play</div><br/>
                <div><a href="#regform">Login</a></div>
            </article>
         </section>

         <section className="hero2" id="hero2">
            <article>
                 <img src="https://t3.ftcdn.net/jpg/01/04/17/92/360_F_104179258_bPRJ9DPzFxnuntE4J0IqyfblbgfaZk80.jpg" alt="" />
            </article>
            <article>
                 <div id="div4">Welcome to sunshine playschool <br />of early learning</div>
                 <div id="div5">Look into the eyes of young child and see the sparkle and wonder.<br />Develop these passions and watch the adult bloom <br />into someone special. At sunrise playhouse, we work every <br />day to build the foundatuions for amazing futures.</div>
            </article>
         </section>

         <section className="hero3" id="hero3">
            <article>
                <div id="div6">Upcoming Registration</div><br />
                <div id="div7">Children's book week</div><br />
                <div id="div8">Oct01,2024 at 12pm</div><br />
                <button  id="btn">Join now</button>
            </article>
            <article>
                <img src="https://w0.peakpx.com/wallpaper/203/928/HD-wallpaper-smile-children-yellow-smile-mood-happy-girl-green-trio-copil-white-blue.jpg" alt=""/>
            </article>
        </section>

        <h1 id="class">Our Classes</h1>
        <section className="hero4" id="hero4">
    
           <article>
                <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiVUbFoyz6fMWl50dk119ahWZ9SNdE-LmHww&s"alt="" /></div>
                <div id="class">Play group</div>
                <div id="write">ideal for 1.5-2.5 years old children learning introduced with fun activities like puppet shows, play, & colours</div>
            </article>
            <article>
                <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtcbCCIY5Px6bDwZ4auCwZnSj77uAxwx3SPw&s" alt=""/></div>
                <div id="class">Nursery</div>
                <div id="write">Curriculum in sync with the children’s mental & physical development group reading, writing, puppet shows, dancing, yoga and more.</div>
            </article>
            <article>
                <div> <img src="https://www.eurokidsindia.com/blog/wp-content/uploads/2023/01/blog-05.jpg" alt=""/> </div>
                <div id="class">Kindergarden</div>
                <div id="write"> Exciting learning experience adding sophisticated skills in different subjects: English, Math, EVS, GK, Art & Craft. </div>
            </article>
            <article>
                <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZsRWfZ-vPTnlJvzYRY60ZJx5YDJ1VP-LErQ&s" alt=""/></div>
                <div id="class">Summer camp</div>
                <div id="write"> Special programmes for perfect holiday planning nurturing creativity spending fun time with friends & hobbies</div>
            </article>
        </section>

        <section className="hero5" id="hero5">
            <article>
                <div id="div9">Our Methodology</div><br/><br/>
                <div id="div10"> Research-based curriculum and individual learning experiences are <br/> integral to all the programs at Rainbow Preschool. <br/> Our teachers are dedicated and nurturing, which means their singular <br/>goal is to help your child meet milestones and become successful. <br/>Our School offers a path toward elementary school that can be <br/> personalized to meet each child’s needs.</div>
            </article>
            <article>
                <img src="https://rainbowpreschools.com/wp-content/uploads/elementor/thumbs/RPS-FLOW-Chart-01-q9edyxidu1mbef0f0s1tknjsbsznepupr71ddqzzow.jpg" alt=""/>
            </article>
        </section>

        <section className="regform" id="regform">
                <br/>
                <br/>
                <div id="enroll">Enroll Your child</div>
                <br/>
                <br/>
                <form method="get">
                <input type="text"  name="name" value="" placeholder="enter name" /><br/><br/>
                <input type="email" name="email" value="" placeholder="enter email" /><br/><br/>
                <input type="tel" name="number"   placeholder="enter mobile number" /><br/><br/>
                <input type="date"  name="Date of birth" placeholder="date" id="date"/><br/><br/>

                Select Gender : /
                <label for="boy">Boy</label>
                <input type="radio" id="boy" name="gender"/>

                <label for="girl">Girl</label>
                <input type="radio" id="girl" name="gender"/><br/><br/>

                Select class :
                <label for="playgroup">Playgroup</label>
                <input type="checkbox" id="playgroup" name="class"/>

                <label for="Nursery">Nursery</label>
                <input type="checkbox" id="Nursery" name="class"/>
    
                <label for="Kindergarden">Kindergarden</label>
                <input type="checkbox" id="Kindergarden" name="class"/>

                <label for="Summer camp">Summer camp</label>
                <input type="checkbox" id="Summer camo" name="class"/><br/><br/>

                <button>submit</button>
                </form>
        </section>

        <footer>
            <article>
               <div><img src="sunrise.jpg" alt="" /></div>
            </article>

            <article id="Follow">
               <div>Follow us :</div>
               <div><a href="https://www.Linkedin.com/twinklethakre"><i class="fa-brands fa-linkedin"></i></a>Linkedin</div>
               <div><a href="https://www.Facebook.com/tinklethakre"><i class="fa-brands fa-facebook"></i></a>Facebook</div>
               <div><a href="https://www.Whatsapp.com/6267002715"><i class="fa-brands fa-whatsapp"></i></a>Whatsapp</div>
               <div><a href="https://www.instagram.com/twinklethakre"><i class="fa-brands fa-instagram"></i></a>Instagram</div>
            </article>

            <article id="address">
               <div>Address : tulip 145 signature 360 Katara hills bhopal</div>
               <div><a href="#">Contact : 9213456789</a></div>
               <div><a href="#"> Email : twinklethakre1998@gmail.com</a></div>
            </article>
        </footer>



        </>
    )
}
export default Hero