import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyles, ContentWrapper } from '../../Common/global';
import { theme } from '../../Common/theme';

import Header from '../Layout/Header/Header';
import Footer from '../Layout/Footer/Footer';

const Wrapper = styled(ContentWrapper)`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const AboutText = styled('div')`
  font-family: 'Cormorant Garamond', serif;
  padding: 60px 20px;
  text-align: center;
`;


const Padding = styled('div')`
  padding: 10px;
`;

const Text = styled('div')`
  font-size: ${({ size }) => size}px;
`;

function About() {
  return (
    <ThemeProvider theme={theme}>
      <Header activePage="about" />
        <GlobalStyles />
        <Wrapper>
          <AboutText>
          <Text size="30">The Beauty of Dust</Text>
          <Padding />
          <Text size="20"><i>Everyday Imagination</i></Text>
          <Padding />
          <Padding />
          <Text size="16">Gathering the voices of artists, who see and shape the hidden aspects of life. 
          They awaken our own imaginations. 
          They help us create something beautiful with what we have and out of who we are.</Text>
          <Padding />
When loved ones die we are caused to pause and consider who we are as humans, “ashes to ashes, dust to dust”. From mere dust a person came to be. Something beautiful and unimaginable from a collection of unextraordinary particles. Dust becomes beauty. Dust becomes a ‘somebody’ able to create beauty, able to create the unimaginable. We are born as creators, who can put our hands to making a world of vibrancy and colour. 

But in the slip-stream of life in western culture many of us have lost the art of imagination and out-of-the-box thinking. We establish less vibrancy and more ‘same same’. Money becomes the boss of our ideas. Our world becomes more bland and less brilliant. 

We believe that out of the unextraordinary people can create something beautiful. There are artists among us still doing this, still creating, swimming against the flow of our majority culture. These artists are professional ‘see-ers’. They notice the way things are, picking up on the nuance and subtleties of life. Their imagination is intact and healthy. They can see beyond the mundane. They can see beneath the veneer of the empty promises of worldly ‘success’ and ‘happiness’.

It is said, if you place a frog in a pot of tepid water and slowly increase the heat the frog will remain unaware and be boiled alive. It is a bit like that with us. We enter a tepid culture as young individuals, businesses, organisations. We have wonderful hopes and dreams for what we might offer the world. But overtime we adjust to the way things are, the things you ‘must do’ to ‘make it’. Eventually our dreams wither and our creativity along with them. 

Artists are skillfully attentive to the waters we swim in. They are the alarm bell, warning the rest of us that we can’t go on like this if we want to live well. They are architects, creating alternate realities that enable flourishing.


thebeautyofdust.com is... 
a bridging platform between the artist and non-artist. It’s like a gourmet ‘Food Box’, nourishing the public with the richness of the arts. It selects art works and makes them accessible for the everyday person and organisation to encounter the powerful influence of imagination and beauty. 

Artists imagine a world beyond societal norms. They notice the trajectory of trending behaviours. And then they share what they see through the beauty of their craft. They draw their listeners into spaces of imagination and possibility, for the sake of hope and of wholeness. 

thebeautyofdust.com is for…
those who want to flourish and to help bring beauty into the world. Through engaging with the works of artists people have their worldview transformed, understanding things from different perspectives. They are inspired to imagine the unimaginable. They are compelled to discover their own capacity to create meaningful and beautiful things.

thebeautyofdust.com is for the leader who wants to build a thoughtful and inspirational team, the parent who wants to curate meaningful connections with their whanau, the teacher who wants to enable their students to see and to be seen, the worker who wants their contribution to be valuable and excellent.


thebeautyofdust.com contains content designed for
slow and thoughtful engagement. 
Poetry, like all art, is best encountered as if tasting a fine cheese or a beautifully aged whiskey. It is rich. Its tasting notes are layered one on top of the next and then the next. It takes some getting used to, but once you develop a palette for them, there’s no going back. What’s more, it is a beautiful thing to sip and savour the delicacy of the arts with the people you do life with. 

The spoken word pieces included are produced to help listeners connect with the poem. Take note of your reaction after hearing a piece. Was there a part that stood out? Could it relate to your work environment or role?  The website includes short interviews to meet the artists and get a ‘behind-the-scenes’ look at their work.


We continue to add new content. Please subscribe with your email address to hear about updates to the website.




values
imagination - the art of seeing the unnoticed and the what ifs

partnership - uniting difference as artists and ‘non-artists’ walk together 

hope - engaging reality with a posture of positivity toward flourishing

beauty - seeking out and creating beauty in all spheres of life

          </AboutText>
        </Wrapper>
      <Footer />
    </ThemeProvider>
  );
}
export default About;