import React from 'react';
import styled from 'styled-components';

import { devices } from '../../../Common/devices';

const BodyContainer = styled('div')`
    margin-top: 10px;    
    width: 100vw;
    padding: 0 5vw;
    flex-direction: row;
    display: flex;
    left: 0;
    top: calc(50vh - 210px);
    position: absolute;
    overflow-y: scroll;

    div {
        padding: 0;
    }
    p {
        margin: 0;
    }
`

const Section = styled('section')`
    min-width: 340px;
`;

function Text() {
  return (
        <BodyContainer>
            <Section>
<p dir="ltr"><span>never alone</span></p>
<p dir="ltr"><span>never any breath alone</span></p>
<p dir="ltr"><span>never a thought or&nbsp;</span></p>
<p dir="ltr"><span>quiver alone of any kind</span></p>
<p dir="ltr"><span>never a beat or pulse&nbsp;</span></p>
<p dir="ltr"><span>or love for&nbsp;</span></p>
<p dir="ltr"><span>any human soul alone</span></p>
<p dir="ltr"><span>alone is impossible</span></p>
<p dir="ltr"><span>alone is death&nbsp;</span></p>
<p dir="ltr"><span>but even then,&nbsp;</span></p>
<p dir="ltr"><span>never alone</span></p>
<p dir="ltr"><span>alone would be to live</span></p>
<p dir="ltr"><span>without the womb&nbsp;</span></p>
<p dir="ltr"><span>of divine oxygen&nbsp;</span></p>
<p dir="ltr"><span>surrounding human&nbsp;</span></p>
</Section>
<Section>
<p dir="ltr"><span>spark and cell</span></p>
<p dir="ltr"><span>there can be no alone</span></p>
<p dir="ltr"><span>not even for enemies</span></p>
<p dir="ltr"><span>not even for&nbsp;</span></p>
<p dir="ltr"><span>emptiness herself&nbsp;</span></p>
<p dir="ltr"><span>and her vast taunts</span></p>
<p dir="ltr"><span>and separation intent</span></p>
<p dir="ltr"><span>there can be no alone</span></p>
<p dir="ltr"><span>there is no space&nbsp;</span></p>
<p dir="ltr"><span>not filled</span></p>
<p dir="ltr"><span>with divine presence&nbsp;</span></p>
<p dir="ltr"><span>nor the envelope&nbsp;</span></p>
<p dir="ltr"><span>of Creator-breath</span></p>
<p dir="ltr"><span>alone is invention,&nbsp;</span></p>
<p dir="ltr"><span>lowbrow imagination&nbsp;</span></p>
</Section>
<Section>
<p dir="ltr"><span>built to shelter&nbsp;</span></p>
<p dir="ltr"><span>human shame</span></p>
<p dir="ltr"><span>the weapon that sought&nbsp;</span></p>
<p dir="ltr"><span>to slay its maker,&nbsp;</span></p>
<p dir="ltr"><span>but it shall not</span></p>
<p dir="ltr"><span>yet,&nbsp;</span></p>
<p dir="ltr"><span>even still never alone</span></p>
<p><span>&nbsp;</span></p>
</Section>
    </BodyContainer>
  );
}
export default Text;