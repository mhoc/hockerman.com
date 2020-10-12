import React from 'react';

import BasePage from "../components/BasePage";
import TextDeemph from "../components/text/TextDeemph";
import TextStd from "../components/text/TextStd";
import TextSubheader from "../components/text/TextSubheader";
import TextLink from "../components/text/TextLink";

const Item = ({ title, link, category, description }) => {
  return (
    <div className="list-item">
      <div className="list-item-header">
        <TextSubheader>{title}</TextSubheader>&nbsp;&nbsp;
        <TextLink href={link}>goto</TextLink>&nbsp;&nbsp;
        <TextStd>{category}</TextStd>
      </div>
      <TextDeemph>
        {description}
      </TextDeemph>
    </div>
  )
}

const One = () => {
  return (
    <BasePage
      nav={[{ label: "home", href: "/"}]}
      header="echo '${COMPANY} One'"
    >
      <div className="subheader">
        <TextDeemph>
          When you lack the creativity for a more specific or meaningful product name, just give up
          and take the easy way out. You're in good company, and happy hour starts at 5.
        </TextDeemph>
      </div>
      <div className="list-container">
        <Item
          title="Akamai One"
          link="https://www.akamai.com/us/en/about/news/press/2015-press/akamai-launches-the-akamai-one-program-for-startups-in-asia-pacific-and-japan.jsp"
          category="Business Relationship Program"
          description="The Akamai One program is designed to empower start-ups to focus on growing their businesses without worrying about the complexity of delivering fast, reliable and secure online experiences for their users."
        />
        <Item
          title="Amazon One"
          link="https://blog.aboutamazon.com/innovation/introducing-amazon-one-a-new-innovation-to-make-everyday-activities-effortless"
          category="Biometric Security"
          description="A fast, convenient, contactless way for people to use their palm to make everyday activities like paying at a store, presenting a loyalty card, entering a location like a stadium, or badging into work more effortless."
        />
        <Item
          title="Android One"
          link="https://www.android.com/one/"
          category="Smartphones"
          description="A family of third-party Android smartphones promoted by Google. In comparison to many third-party Android devices, which ship with a manufacturer's customized user interface and bundled apps, these devices run near-stock versions of Android with limited modifications, and a focus on Google services."
        />
        <Item
          title="Apple One"
          link="https://www.apple.com/apple-one/"
          category="Biometric Security"
          description="Apple One bundles up to six amazing Apple services into one easy subscription. Get a plan that’s right for you — or for your whole family. And all members have private access to each service, across all their devices. With Apple One, it’s never been easier to get more. For less."
        />
        <Item
          title="Cloudflare One"
          link="https://blog.cloudflare.com/introducing-cloudflare-one/"
          category="Enterprise Networking"
          description="A comprehensive, cloud-based network-as-a-service solution that is designed to be secure, fast, reliable and define the future of the corporate network."
        />
        <Item
          title="Google One"
          link="https://one.google.com/about"
          category="Subscription Bundle"
          description="One membership to get more out of Google. Expanded storage, access to experts, and more – all in one shareable plan."
        />
        <Item
          title="Lenovo One"
          link="https://www.gizchina.com/2019/11/06/lenovo-one-will-merge-windows-and-android-systems/"
          category="Operating System"
          description="A prototype operating system to merge Windows and Android."
        />
        <Item
          title="Lexus One"
          link="https://www.lexus.nl/finance/lexus-one-en/"
          category="Vehicle Subscription"
          description="With the new Lexus One monthly subscription you can enjoy up to five different Lexus hybrids a year. There’s no down payment, no long commitment, but everything else is included."
        />
        <Item
          title="Salesforce1"
          link="https://www.salesforce.com/news/press-releases/2013/11/19/salesforce-com-introduces-salesforce1/"
          category="CRM"
          description="Salesforce1 is the new social, mobile and cloud customer platform, built to transform sales, service and marketing apps."
        />
        <Item
          title="Samsung One UI"
          link="https://www.samsung.com/us/apps/one-ui/"
          category="User Interface"
          description="One UI is easy to use so you can quickly navigate through any task and reduce the overload. Designed to help you focus on what really matters, the new design is unique yet accessible. The One UI experience is consistent and inclusive for everyone."
        />
        <Item
          title="SAP Business One"
          link="https://www.sap.com/products/business-one.html"
          category="ERP"
          description="Gain greater control over your business or subsidiary with SAP Business One. This small business management software connects and streamlines your processes — and grows along with you."
        />
        <Item
          title="Square One"
          link="https://squareup.com/us/en/square-one"
          category="Retailer Services"
          description="Square customer onboarding and experience service. Editors Note: This _one_ is actually pretty cool."
        />
        <Item
          title="T-Mobile ONE"
          link="https://www.t-mobile.com/support/plans-features/t-mobile-one-for-phones"
          category="Cellular Service"
          description="T-Mobile's legacy cellular plan which includes unlimited talk, text, & high-speed data on your phone"
        />
        <Item
          title="Ubuntu One"
          link="https://en.wikipedia.org/wiki/Ubuntu_One"
          category="Single Sign-On"
          description="Ubuntu One is an OpenID-based single sign-on service operated by Canonical Ltd. to allow users to log onto many Canonical-owned Web sites. Until April 2014, Ubuntu One was also a file hosting service and music store that allowed users to store data in the cloud"
        />
        <Item
          title="Verizon Fios TV One"
          link="https://www.verizon.com/support/residential/tv/equipment/stb-dvr/fios-tv-one"
          category="TV Appliance"
          description="Fios TV One is an advanced whole home solution for viewing on up to five TVs in the home."
        />
        <Item
          title="VMWare Workspace ONE"
          link="https://www.vmware.com/products/workspace-one.html"
          category="Digital Workspace Platform"
          description="Simply and securely deliver and manage any app on any device with VMware Workspace ONE, an intelligence-driven digital workspace platform. Workspace ONE integrates access control, application management and multi-platform endpoint management into a single platform and is available as a cloud service or on-premises deployment."
        />
        <Item
          title="OneWalmart"
          link="https://one.walmart.com/content/usone/en_us/company.html"
          category="Employee Portal"
          description="Associate News, Knowledge, and Community."
        />
        <Item
          title="Xbox One"
          link="https://en.wikipedia.org/wiki/Xbox_One"
          category="Video Games"
          description="The ultimate games and 4K entertainment system. Play over 100 console exclusives and a growing library of Xbox 360 games on the Xbox One. Stream your favorite films and shows in stunning 4K Ultra HD. Then play blockbusters games with friends on Xbox Live."
        />
      </div>
      <style jsx global>{`
        .subheader {
          max-width: 750px;
        }
        .list-container {
          margin-top: 56px;
        }
        .list-item {
          display: flex;
          flex-direction: column;
          margin-bottom: 24px;
        }
        .list-item-header {
          display: flex;
          flex-direction: row;
          margin-bottom: 4px;
        }
      `}</style>
    </BasePage>
  );
}
// https://www.sap.com/products/business-one.html
export default One;
