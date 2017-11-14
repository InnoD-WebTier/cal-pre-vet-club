import React from 'react';

const officersContent = [
  {
    name: "Brandon Weiss",
    year: "Senior",
    major: "Molecular & Cell Biology",
    position: "President",
    email: "calprevet.president@gmail.com",
    url: require("../images/officers/officer.jpg"),
    bio: (
      <div>
        <p>Hi Pre-vets! My name's Brandon and I am ecstatic to be serving as your President this year. I've wanted to be a veterinarian for as long as I can remember and I've been fortunate enough to work with all sorts of animals in wildlife, exotic, emergency, and small animal medicine. As of now, I'm looking into specializing in some form of small animal medicine with some wildlife and exotics thrown into the mix. Outside of academics, I love to sing, explore new places to eat around the area, shop (you can never have too many clothes), and hike! I'm always down to hang out or chat so please feel free to reach out if you have any questions or just want to talk, whether it’s related to veterinary medicine or not! Welcome to the PVC Family!
        </p>
      </div>
    )
  },{
    name: "Divya Ravichandran",
    year: "Senior",
    major: "Molecular & Cell Biology",
    position: "Vice President of Internal Affairs",
    email: "calprevet.internalvp@gmail.com",
    url: require("../images/officers/officer-2.jpg"),
    bio: (
      <div>
        <p>Hi my name is Divya! I'm currently a senior MCB/IB major and am very excited to be your VP of Internal Affairs :) I am super passionate about veterinary medicine as I've wanted to become one since I was in elementary school. My parents were not so appreciative of my career choice and so I have spent practically my whole life trying to convince them that this is the job for me! I am not too sure about whether I want to specialize or not but I'm quite sure I want to go into small animal medicine. Besides studying, I like to spend my time baking and going out to eat thai food! Thai is by far my favorite cuisine in Berkeley, but in general if its vegetarian I'm willing to try it ;) If you ever need a buddy to get some food with, I am your gal! Can't wait to meet you all and get to know you all this year!</p>
      </div>
    )
  },{
    name: "Jennifer Good",
    year: "Sophomore",
    major: "Molecular Environmental Biology",
    position: "Vice President of External Affairs",
    email: "calprevet.externalvp@gmail.com",
    url: require("../images/officers/officer-3.jpg"),
    bio: (
      <div>
        <p>Hi PVC! My name is Jennifer and I am so excited that I was chosen to be your Vice President of External Affairs for this school year. I am currently a second year Molecular Environmental Biology major minoring in Spanish. Throughout high school I volunteered at a shelter as an animal socializer and at Happy Hollow Zoo in San Jose as a wildlife education ambassador. Joining PVC has opened me up to so many more opportunities to learn, such as volunteering with low cost vaccine clinics, private practices, and the veterinarian at Oakland Animal Services. My goal as EVP is to help all of you find a variety of ways to gain experience within the veterinary field! In the future, I hope to work with low income pet owners both in the US and internationally or in an emergency hospital environment.</p>
        <p>Aside from my dreams of being a veterinarian, I enjoy spending my time playing with my cat Whiskers, watching movies, listening to music, traveling with friends, making pottery, and reading. Some other interesting facts are that I grew up in the South Bay and that I have been vegan since 2015 — if anyone else is vegan or interested in veganism, I love exploring vegan restaurants in and around Berkeley! I look forward to getting to know all of you, and I am always open to answer questions or just hang out :)</p>
      </div>
    )
  },{
    name: "Evan Chang",
    year: "Junior",
    major: "Integrative Biology",
    position: "Treasurer",
    email: "calprevet.treasurer@gmail.com",
    url: require("../images/officers/officer-4.jpg"),
    bio: (
      <div>
        <p>Hello! I'm Evan, and I'll be your treasurer for this year! I've always wanted to be a veterinarian ever since I was young. When I was a kid, my family enjoyed taking trips to the San Francisco Zoo because at the time it was relatively cheap and I would be able to entertain myself by learning about all the animals. As a result, I am now interested in exotic animal medicine and would like to eventually work in a zoo. I was born and raised in the Bay Area and have a bunny named Tubby back in my home in Millbrae. In my free time, I like to play Pokémon or chill with my a cappella group. Sidenote: I'm carrying a bunch of bread cuz it's like I'm holding a bunch of corgi butts :P</p>

        <p>Can't wait to meet all of you and I'm excited to get to know you guys :D</p>
     </div>
    )
  },{
    name: "Maura Meijer",
    year: "Junior",
    major: "Molecular Environmental Biology",
    position: "Community & Public Relations Officer (Fall 2017)",
    email: "calprevet.pr@gmail.com",
    url: require("../images/officers/officer-5.jpg"),
    bio: (
      <div>
        <p>Hi Cal PVC! I’m Maura, a third year MEB major, and I’m so excited be your Community and Public Relations Officer this year; I have so many ideas for fun things to do! I have been determined to become a veterinarian since fifth grade, when my bestie and I made a pact to both become vets and run a practice together. These days, I’m not quite sure what area of veterinary practice I want to go into, but I’m currently interested in looking into shelter medicine or exotics like reptiles. I was born and raised in the Bay Area, and have an adorable chocolate lab back home. If you have any questions, or just want to see pictures of my goofy pup, don’t be afraid to ask- I won’t bite. ;P</p>
     </div>
    )
  },{
    name: "Jillian Shaw",
    year: "Sophomore",
    major: "Molecular Environmental Biology",
    position: "Community & Public Relations Officer (Spring 2018)",
    email: "calprevet.pr@gmail.com",
    url: require("../images/officers/officer-6.jpg"),
    bio: (
      <div>
        <p>Hello Cal PVC! My name is Jillian and I'm a second year MEB major and I am stoked to be one of your Public Relations officers along with Maura. I grew up riding horses and always thought about becoming a vet (though I am still deciding if it is really the right career path for me)! In addition to PVC, at Cal I have joined greek life, participated in the Berkeley Project, played Club Lacrosse and I plan to work in Dr. Wildsoet's optometry lab with guinea pigs this fall! I love hiking, animals, exploring new places, and boba! So if you're ever down for a spontaneous adventure, hit me up! I love meeting new people! :)</p>
     </div>
    )
  },{
    name: "Annie Chen",
    year: "Junior",
    major: "Integrative Biology Major",
    position: "Secretary & Webmaster",
    email: "calprevet.web@gmail.com",
    url: require("../images/officers/officer-7.jpg"),
    bio: (
      <div>
        <p>Hello! I'm Annie and I'm excited to be your secretary and webmaster this year! For as long as I can remember, I have wanted to be a veterinarian and I had apparently learned to walk as a baby because I wanted to chase after my pug! I am not quite sure what kind of veterinarian I am interested in becoming however; since it has been switching between small animal, exotic, equine, etc. Besides Cal PVC, I am also involved in Circle K International and I currently work in the Animal Discovery Room at the Lawrence Hall of Science (come visit me sometime!) I am originally from Irvine in SoCal and I love bowling, ice skating, listening to music, visiting the animal shelter, and watching baseball/kdrama. I can't wait to meet you all and welcome to Cal PVC!</p>
     </div>
    )
  }
]

export default officersContent;
