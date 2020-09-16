import React, { useState } from 'react'

import Button from '../../../../components/Button'
import Header from '../../../../components/Header'
import Modal from '../../../../components/Modal'
import Image01 from '../../../../images/01.png'
import Image02 from '../../../../images/02.png'
import Image03 from '../../../../images/03.png'
import Image04 from '../../../../images/04.png'
import Image05 from '../../../../images/05.png'
import { translate } from '../../../../locales'
import {
  Container, Card, Text, Img, ImgContainer, ImgContent, VideoContainer, VideoContent,
} from './styles'
import Video from './video'

function DiretaEIndireta() {
  const [isOpen, setIsOpen] = useState(false)
  const [isOpen02, setIsOpen02] = useState(false)
  return (
    <>
      <Modal title="Exemplo" isOpen={isOpen} toggle={() => setIsOpen(!isOpen)}>
        <Video video="https://www.youtube.com/embed/g3OXeHmLz4c" finish={() => setIsOpen(false)} />
      </Modal>
      <Modal title="Exemplo01" isOpen={isOpen02} toggle={() => setIsOpen02(!isOpen02)}>
        <Video video="https://clipchamp.com/watch/r9IfG6at1Ss" finish={() => setIsOpen02(false)} />
      </Modal>
      <Header title={translate('menu.diretaEIndireta')} />
      <Container>
        <Card>
          <VideoContainer>
            <VideoContent>
              <Button
                title=""
                button={{
                  label: 'Exemplo - Observação Direta',
                  action: () => setIsOpen(true),
                }}
              />
            </VideoContent>
            <VideoContent>
              <Button
                title=""
                button={{
                  label: 'Exemplo - Observação Indireta',
                  action: () => setIsOpen02(true),
                }}
              />
            </VideoContent>
          </VideoContainer>
          <Text>{translate('pages.Techs.diretaindireta.p1')}</Text>
          <Text>{translate('pages.Techs.diretaindireta.p2')}</Text>
          <ImgContent>
            <Img left bottom href="">
              <Img object src={Image02} alt={translate('menu.diretaEIndireta')} />
            </Img>
          </ImgContent>
          <Text>{translate('pages.Techs.diretaindireta.p3')}</Text>
          <Text>{translate('pages.Techs.diretaindireta.p4')}</Text>
          <Text>{translate('pages.Techs.diretaindireta.p5')}</Text>
          <Text>{translate('pages.Techs.diretaindireta.p6')}</Text>
          <Text>{translate('pages.Techs.diretaindireta.p7')}</Text>
          <Text>{translate('pages.Techs.diretaindireta.p8')}</Text>
          <Text>{translate('pages.Techs.diretaindireta.p9')}</Text>
          <ImgContent>
            <Img center bottom href="">
              <Img object src={Image04} alt={translate('menu.diretaEIndireta')} />
            </Img>
          </ImgContent>
          <Text>{translate('pages.Techs.diretaindireta.p10')}</Text>
          <Text>{translate('pages.Techs.diretaindireta.p11')}</Text>
          <Text>{translate('pages.Techs.diretaindireta.p12')}</Text>
          <Text>{translate('pages.Techs.diretaindireta.p13')}</Text>
          <Text>{translate('pages.Techs.diretaindireta.p14')}</Text>
          <Text>{translate('pages.Techs.diretaindireta.p15')}</Text>
        </Card>
        <ImgContainer>
          <ImgContent>
            <Img left top href="">
              <Img object src={Image01} alt={translate('menu.diretaEIndireta')} />
            </Img>
          </ImgContent>

          <ImgContent>
            <Img center top href="">
              <Img object src={Image03} alt={translate('menu.diretaEIndireta')} />
            </Img>
          </ImgContent>

          <ImgContent>
            <Img rigth top href="">
              <Img object src={Image05} alt={translate('menu.diretaEIndireta')} />
            </Img>
          </ImgContent>
        </ImgContainer>
      </Container>
    </>

  )
}

export default DiretaEIndireta
