import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyles, ContentWrapper } from '../../Common/global';
import { theme } from '../../Common/theme';
import { Link } from 'react-router-dom';

import Header from '../Layout/Header/Header';
import Footer from '../Layout/Footer/Footer';
import mixpanel from 'mixpanel-browser';

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
  max-width: 900px;
`;

const StyledLink = styled(Link)`
    pointer: cursor;
`;

const Padding = styled('div')`
  padding: ${({ size }) => size}px;

`;

const Text = styled('div')`
  font-size: ${({ size }) => size}px;
  max-width: ${({ width }) => width ? width+'px' : 'auto'};
  margin: auto;
  text-align: ${({ align }) => align || 'center'};
`;

const Box = styled('div')`
  border: 1px solid black;
  padding: 27px 0px 41px;
  max-width: 491px;
  margin: auto;
`;

function About() {
  mixpanel.init('55bc83f2f66404f4e75e43ca1cecaf6f', {debug: true}); 
  mixpanel.track(`View About`);
  return (
    <ThemeProvider theme={theme}>
      <Header activePage="about" />
        <GlobalStyles />
        <Wrapper>
          <AboutText>
          <Text size="50">the beauty of dust</Text>
          <Padding size="5" />
          <Text size="20"><i>everyday imagination</i></Text>
          <Padding size="40" />
          <Text size="21" width="700"><strong>Gathering the voices of artists, who see and shape the hidden aspects of life.</strong></Text>
          <Text size="21" width="700"><strong>They awaken our own imaginations. 
          They help <i>us</i> create something beautiful with what <i>we</i> have and out of who <i>we</i> are.</strong></Text>
          <Padding size="30"/>

          <Box>
            <Text size="18">values.</Text>
            <Padding size="15" />
            <Text size="15">imagination . the art of seeing the unnoticed and the what ifs</Text>
            <Padding size="10" />
            <Text size="15">partnership . uniting difference as artists and ‘non-artists’ walk together </Text>
            <Padding size="10" />
            <Text size="15">hope . engaging reality with a posture of positivity toward flourishing</Text>
            <Padding size="10" />
            <Text size="15">beauty . seeking out and creating beauty in all spheres of life</Text> 
          </Box>

          <Padding size="30" />
          <Text size="18" align="left">When a loved one dies we are caused to pause and consider who we are as humans, “ashes to ashes, dust to dust”. From mere dust a person came to be. Something beautiful and unimaginable from a collection of unextraordinary particles. Dust becomes beauty. Dust becomes a ‘somebody’ able to create beauty, able to create the unimaginable. </Text>
          <Padding size="10" />
          <Text size="18" align="left">We are born as creators, who can put our hands to making a world of vibrancy and colour. Yet, in the slip-stream of life many of us have lost the art of imagination, constrained by the ‘tried and true’.</Text>
          
          <Padding size="10" />
          <Text size="18" align="left">The Beauty of Dust believes out of the unextraordinary people can create something beautiful. There are artists among us still doing this, still creating, swimming against the flow of our majority culture. These artists are professional ‘see-ers’, picking up on the nuance and subtleties of life. Their imagination is intact and healthy. They see beyond the mundane. They see beneath the veneer of empty promises of ‘success’ and ‘happiness’.</Text>

          <Padding size="10" />
          <Text size="18" align="left">Artists are skillfully attentive to the waters we live in. They are the alarm bell, warning the rest of us that we can’t go on like this if we want to live well. They are architects, creating alternate realities that enable flourishing.</Text>

          <Padding size="10" />
          <Text size="18" align="left"><i>thebeautyofdust.com is... </i>
          <Padding size="1" />
          a bridging platform between the artist and non-artist. It’s like a gourmet ‘Food Box’, nourishing the public with the richness of the arts. It selects art works and makes them accessible for the everyday person and organisation. Through the beauty of their craft, artists draw us into spaces of imagination and possibility, for the sake of hope and wholeness. </Text>

          <Padding size="10" />
          <Text size="18" align="left"><i>thebeautyofdust.com is for...</i></Text>
          <Text size="18" align="left">people who want to flourish and to bring beauty into the world. Through engaging with the works of artists people have their worldview transformed, understanding things from different perspectives. They are inspired to imagine the unimaginable. They are compelled to discover their own capacity to create meaningful and beautiful things.</Text>
          
           

          <Padding size="10" />
          <Text size="18" align="left"><i>thebeautyofdust.com exists to...</i></Text>
          <Text size="18" align="left">draw the arts into everyday contexts and conversations. It wants to help people establish a rhythm of thoughtful engagement with the arts in their worlds of work and rest.</Text>

          <Padding size="10" />
          <Text size="18" align="left">thebeautyofdust.com resources the leader who wants to build a thoughtful and inspirational team, the parent who wants to curate meaningful connections with their whanau, the teacher who wants to enable their students to see and to be seen.</Text>

          <Padding size="10" />
          <Text size="18" align="left">The arts are best encountered as if tasting a fine cheese or a beautifully aged whiskey. They are rich. Their tasting notes are layered one on top of the next. They take some getting used to. But, once you develop a palette for them, there’s no going back. What’s more, it is a beautiful thing to sip and savour the delicacy of the arts with the people you do life with. </Text>


          <Padding size="20" />
          <Text size="18" width="400">We continue to add new content. Please <StyledLink to="contact/">subscribe</StyledLink> with your email address to hear about updates to the website.</Text>
                    
          </AboutText>
        </Wrapper>
      <Footer />
    </ThemeProvider>
  );
}
export default About;