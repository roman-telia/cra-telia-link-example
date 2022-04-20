import React, { FC } from "react";
import {
  TeliaGrid,
  TeliaCol,
  TeliaRow,
  TeliaLink,
  TeliaP,
  TeliaHeading,
  TeliaFooter,
  TeliaTextSpacing,
  TeliaIcon,
  TeliaLinkImage,
  TeliaFooterPartners,
  TeliaFooterNavigation,
  TeliaList,
  TeliaFooterLegal,
} from "@teliads/components/react";
import "./Footer.scss";
import { links as legalLinks } from "./legalLinks";
import { links } from "./list-of-links";

const Footer: FC = () => {
  return (
    <>
      <TeliaGrid>
        <TeliaRow>
          <TeliaCol width={12}>
            <TeliaTextSpacing>
              <TeliaHeading tag="h4" variant="title-200">
                Contact us
              </TeliaHeading>
              <TeliaP>
                Slack channel :{" "}
                <TeliaLink href="https://teliafin.slack.com/archives/CF8073KQA">
                  #design-system
                </TeliaLink>
              </TeliaP>
              <TeliaP>
                {" "}
                Slack group for designers:{" "}
                <TeliaLink href="https://teliafin.slack.com/archives/C01MCAUS14H">
                  #telia_global_design
                </TeliaLink>
              </TeliaP>
            </TeliaTextSpacing>
          </TeliaCol>
        </TeliaRow>
      </TeliaGrid>
      <TeliaFooter>
          <TeliaFooterNavigation
            slot="navigation"
            links={JSON.stringify(links)}
          ></TeliaFooterNavigation>
          <TeliaFooterPartners slot="partners"></TeliaFooterPartners>
          <address slot="address">
            <TeliaList list-tag="ul">
              <li>Address line 1</li>
              <li>Address line 2</li>
              <li>Address line 3, organisation number</li>
            </TeliaList>
          </address>
          <section slot="social">
            <TeliaLinkImage
              html-href="#insta"
              linkText="Link to Telia’s Instagram page"
              dark-background
              ensure-click-area
            >
              <TeliaIcon name="instagram"></TeliaIcon>
            </TeliaLinkImage>
            <TeliaLinkImage
              html-href="#face"
              linkText="Link to Telia’s Facebook page"
              dark-background
              ensure-click-area
            >
              <TeliaIcon name="facebook"></TeliaIcon>
            </TeliaLinkImage>
            <TeliaLinkImage
              html-href="#toob"
              linkText="Link to Telia’s YouTube page"
              dark-background
              ensure-click-area
            >
              <TeliaIcon name="youtube"></TeliaIcon>
            </TeliaLinkImage>
            <TeliaLinkImage
              html-href="#twee"
              linkText="Link to Telia’s Twitter page"
              dark-background
              ensure-click-area
            >
              <TeliaIcon name="twitter"></TeliaIcon>
            </TeliaLinkImage>
          </section>
          <section slot="legal">
            <TeliaFooterLegal
              copyright={"© Telia Company AB " + new Date().getFullYear()}
              items={JSON.stringify(legalLinks)}
            ></TeliaFooterLegal>
          </section>
        </TeliaFooter>
    </>
  );
};

export default Footer;
