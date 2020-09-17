import React from 'react'

import Header from '../../../../components/Header'
import Image06 from '../../../../images/06.png'
import Image07 from '../../../../images/07.png'
import Image08 from '../../../../images/08.png'
import Image09 from '../../../../images/09.jpg'
import Image10 from '../../../../images/10.png'
import Image11 from '../../../../images/11.jpg'
import Image12 from '../../../../images/12.jpg'
import Image13 from '../../../../images/13.png'
import Image14 from '../../../../images/14.jpg'
import Image15 from '../../../../images/15.png'
import Image16 from '../../../../images/16.png'
import Image17 from '../../../../images/17.png'
import { translate } from '../../../../locales'
import { Container, Card, Text, Img, ImgContent } from './styles'

export default function VozAlta() {
  return (
    <>
      <Header title={translate('menu.vozAlta')} />
      <Container>
        <Card>
          <Text>{translate('pages.Techs.vozAlta.p1')}</Text>

          <ImgContent>
            <Img left bottom href="">
              <Img object src={Image06} alt={translate('menu.vozAlta')} />
            </Img>
          </ImgContent>
          <Text />
          <Text>{translate('pages.Techs.vozAlta.p2')}</Text>
          <Text>{translate('pages.Techs.vozAlta.p3')}</Text>
          <Text>{translate('pages.Techs.vozAlta.p4')}</Text>
          <ImgContent>
            <Img left bottom href="">
              <Img object src={Image07} alt={translate('menu.vozAlta')} />
            </Img>
          </ImgContent>
          <Text />
          <ImgContent>
            <Img left bottom href="">
              <Img object src={Image08} alt={translate('menu.vozAlta')} />
            </Img>
          </ImgContent>
          <Text />
          <ImgContent>
            <Img left bottom href="">
              <Img object src={Image09} alt={translate('menu.vozAlta')} />
            </Img>
          </ImgContent>
          <Text />
          <ImgContent>
            <Img left bottom href="">
              <Img object src={Image10} alt={translate('menu.vozAlta')} />
            </Img>
          </ImgContent>
          <Text />
          <ImgContent>
            <Img left bottom href="">
              <Img object src={Image11} alt={translate('menu.vozAlta')} />
            </Img>
          </ImgContent>
          <Text />

          <ImgContent>
            <Img left bottom href="">
              <Img object src={Image13} alt={translate('menu.vozAlta')} />
            </Img>
          </ImgContent>
          <Text />
          <ImgContent>
            <Img left bottom href="">
              <Img object src={Image14} alt={translate('menu.vozAlta')} />
            </Img>
          </ImgContent>
          <Text />
          <ImgContent>
            <Img left bottom href="">
              <Img object src={Image15} alt={translate('menu.vozAlta')} />
            </Img>
          </ImgContent>
          <Text />
          <ImgContent>
            <Img left bottom href="">
              <Img object src={Image16} alt={translate('menu.vozAlta')} />
            </Img>
          </ImgContent>
          <Text />
          <ImgContent>
            <Img left bottom href="">
              <Img object src={Image17} alt={translate('menu.vozAlta')} />
            </Img>
          </ImgContent>
          <Text />
          <Text>{translate('pages.Techs.vozAlta.p5')}</Text>
        </Card>
      </Container>
    </>

  )
}
