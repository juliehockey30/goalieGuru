import React, { Component } from 'react';
import { Wrapper, ColumnWrapper } from './Testimonials.styled.js';
import TestimonialCard from './testimonialCard/TestimonialCard.js';

class Testimonials extends Component {

  getTestimonials() {
    return ([
      {
        body: "\"Wren’s coaching insight has not only made me a faster goaltender, but a smarter one. His focus on not only the fundamentals but the nuances of the position have developed my vision and ability to think the game tremendously. He’s constantly adapting and experimenting to stay on the cutting edge and is an absolute pleasure to work with. I highly recommend him for coaching at any level.\"",
        name: "Declan Rooney",
        title: "Ohio State University - ACHA",
      },
      {
        body: "\"I first met Coach Wren a few years ago at the inaugural Global Goaltending Retreat in Breckenridge, CO where he was one of the Directors.  After getting to know him in that setting of world-class goalie coaches, I knew he would be a perfect fit for my Goalie program at the Bulgarian Ice Hockey Federation.  Since then, Coach has gone on to participate not only in the Goalie and GC Development programs but to also serve on the staffs of some of the Bulgarian National Teams at IIHF tournaments. NL Coach Wren does an excellent job balancing being at the the cutting edge of goaltending thought and theory and having the 'bed side manner' of an excellent coach.   Having coached goaltenders from the youngest levels of minor hockey all the way to professionals, I can state without reservation that Wren has the ability to coach at every level of hockey.\"",
        name: "Rod Wisco",
        title: "No Excuses Goaltending, Toronto, Canada",
      },
      {
        body: "\"Since 2011, I have been able to get to know Wren Arbuthnot as a coach, mentor and friend. Over these years, my game in net has excelled beyond anything that could’ve been possible without him. In short, he is a very analytical coach that knows the ins and outs of the game at every level. He can coach anything from mites to pros with the same level of connection to each and every goalie. The knowledge I have gained from him has been immense. Additionally, I am continuously learning more because he is constantly a student of the game which allows him to transfer that to me.\"",
        name: "Kaeden Edstrom",
        title: "Colorado Springs Tigers AAA",
      }
    ])
  }

  render() {
    const testimonials = this.getTestimonials();

    return (
      <Wrapper id="testimonials">
        <ColumnWrapper>
          <TestimonialCard card={testimonials[0]} />
          <TestimonialCard card={testimonials[2]} />
        </ColumnWrapper>
        <ColumnWrapper>
          <TestimonialCard card={testimonials[2]} />
        </ColumnWrapper>
      </Wrapper>
    );
  }
}

export default Testimonials;
