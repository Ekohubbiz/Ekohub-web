import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../../components/Landing/MainLayout';
import MobileLayout from '../../components/mobile/Landing/MobileLayout';
import { paths } from '../../constants';
import { Desktop, Mobile } from '../../layout';

const Policy = () => {
  return (
    <>
      <Desktop>
        <MainLayout>
          <p className="text-center font-bold text-xl">Privacy Policy</p>
          <div className="my-8 mx-40">
            <p className="font-bold my-2">WELCOME TO EKO HUB.</p>
            <p className="font-bold my-2">
              PLEASE READ THIS IMPORTANT LEGAL INFORMATION THAT GOVERNS YOUR USE
              OF THE EKOHUB.NG WEBSITE AND THE SERVICES.
            </p>
            <p className="font-bold my-2">23 March 2022</p>
            <p className="my-4">
              By using http://www.ekohub.ng or the Ekohub mobile application of
              the online platform (collectively, the “ Website ”), you confirm
              that you have read, understood, and accept these terms of use
              (“Terms ”) as the terms which govern your access to and use of the
              Website and the Service and you agree to comply with them. If you
              do not accept or agree to comply with these Terms, you must not
              use this Website. Additionally, when using a portion of the
              Service, you agree to conform to any applicable posted guidelines
              for such Service, which may change or be updated from time to time
              at our sole discretion.
            </p>
            <p className="my-4">
              These Terms are made between Eko Hub (“we” “us” “ our ”, the
              “Company”, as applicable) and you (“you ” or the “ User ”). The
              Company is part of the operation for various services other than
              the Service, such as car inspections, car evaluations, and
              photography services. Nigeria mainland services such as car
              inspections, evaluations and car brokering services are also
              carried out by Ekohub Motors LLC.
            </p>
            <p className="my-4">
              If you are a company advertising on our Website, you will be
              required to enter into additional terms and conditions set out in
              our Advertising Agreement, however, please note that these Terms
              will still apply and must be read in conjunction with any other
              agreement you enter into with the Company.
            </p>

            <article className="my-4">
              <p className="font-bold my-2">1.1 DEFINITIONS</p>
              <p className="my-2">
                The following capitalised terms shall have the following
                meaning, except where the context otherwise requires:
              </p>
              <ul>
                <li>
                  <p className="my-2">
                    “Advertising Agreement ” – an agreement for the provision of
                    advertising services or products entered into between the
                    Company and the Client.
                  </p>
                </li>
                <li>
                  <p className="my-2">
                    “Ad Services Package ” – the bundle of advertising product
                    or service which the Company agrees to provide to the
                    Customer, as set out in the relevant order form provided by
                    the Company and signed by the Client to order the Ad
                    Services Package pursuant to these Terms and the terms of
                    the Advertising Agreement.
                  </p>
                </li>
                <li>
                  <p className="my-2">
                    “Client” – the client entity that is party to the
                    Advertising Agreement.
                  </p>
                </li>
                <li>
                  <p className="my-2">
                    “Customer” – any customer of the Client.
                  </p>
                </li>
                <li>
                  <p className="my-2">
                    “Effective Date” – the date set out at the top of these
                    Terms.
                  </p>
                </li>
                <li>
                  <p className="my-2">
                    “Intellectual Property Rights ” – all intellectual property,
                    including patents, trademarks, rights in goodwill, database
                    rights and rights in data, rights in designs, copyrights and
                    topography rights (whether or not any of these rights are
                    registered, and including applications and the right to
                    apply for registration of any such rights) and all
                    inventions, rights in know-how, trade secrets and
                    confidential information, customer and supplier lists and
                    other proprietary knowledge and information and all rights
                    under licences and consents in relation to any such rights
                    and all rights and forms of protection of a similar nature
                    or having equivalent or similar effect to any of these which
                    may subsist anywhere in the world for their full term,
                    including any renewals and extensions.
                  </p>
                </li>
                <li>
                  <p className="my-2">
                    “Material” – material and content published on the Website
                    or otherwise provided by the Company in connection with the
                    Service.
                  </p>
                </li>
                <li>
                  <p className="my-2">
                    “Privacy Policy” – the privacy policy of the Company from
                    time to time.
                  </p>
                </li>
                <li>
                  <p className="my-2">
                    “Product” – an online classifieds advertising platform
                    provided on the Website and the Ad Services Package.
                  </p>
                </li>
                <li>
                  <p className="my-2">
                    “Posting Agents” – a third-party agent, service or
                    intermediary that offers to post Material to the Service on
                    behalf of others.
                  </p>
                </li>
                <li>
                  <p className="my-2">
                    “Registration Details ” – the details a User must provide
                    upon registering for the Website from time to time (for
                    example: name, phone numbers, email address, age and/or
                    address).
                  </p>
                </li>
                <li>
                  <p className="my-2">
                    “Service” – the provision of the Website and the Product.
                  </p>
                </li>
                <li>
                  <p className="my-2">
                    “Unacceptable ” – any material or information uploaded to or
                    made available on the Website which under the law of any
                    jurisdiction from which the Website may be accessed may be
                    considered:
                  </p>
                  <p className="my-4 ml-4">
                    illegal, illicit, indecent, obscene, racist, offensive,
                    pornographic, paedophilic, insulting, false, unreliable,
                    misleading, harmful or potentially harmful to minors,
                    threatening, libellous, alleged to be or actually defamatory
                    or in infringement of third-party rights (of whatever nature
                    and including, without limitation, any Intellectual Property
                    Rights), invasive of another’s privacy or other rights, to
                    relate to or encourage money laundering or illegal gambling;
                  </p>
                  <p className="my-4 ml-4">
                    in breach of any applicable regulations, standards or codes
                    of practice (notwithstanding that compliance may not be
                    compulsory);
                  </p>
                  <p className="my-4 ml-4">
                    in contravention of legislation, including without
                    limitation, that relating to weapons, animals or alcohol; or
                    <br />
                    harmful to the Company’s reputation.
                  </p>
                </li>
                <li>
                  <p className="my-2">
                    “User Material ” – material and content posted on the
                    Website by a User or otherwise provided by a User in
                    connection with the Website or the Service.
                  </p>
                </li>
              </ul>
            </article>
            <article className="my-4">
              <p className="font-bold my-2">
                GENERAL TERMS AND CONDITIONS WHICH APPLY TO USERS
              </p>
              <ul>
                <li>
                  <p className="font-medium my-2">
                    2.1 In registering for this Website, the User must provide
                    true, accurate, current and complete Registration Details
                    which the User must update after any changes (except age)
                    before using the Website for further services in the future.
                  </p>
                </li>
                <li>
                  <p className="font-medium my-2">
                    2.2 The User hereby agrees and acknowledges that the Website
                    may contain adverts placed by advertisers or companies in
                    the course of business for goods or services (and which the
                    Company takes no responsibility for). Advertisers or
                    companies using the Website or the Service to place adverts
                    offering goods or services of a business, commercial or
                    trade nature must include their full names in the advert and
                    make it clear that they are selling goods or services in the
                    course of business either by the content, format, size or
                    place of the advertisement or by including words such as
                    “trade”, “dealer”, “agent”, “wholesale” or similar in the
                    name of the advert they submit for publication.
                  </p>
                </li>
                <li>
                  <p className="font-medium my-2">
                    2.3 The User hereby warrants and represents to the Company
                    that it is at least eighteen years of age and legally able
                    to enter into contracts.
                  </p>
                </li>
                <li>
                  <p className="font-medium my-2">
                    2.4 The Company reserves the discretion to withdraw any
                    Material or User Material from the Website without prior
                    notice and to refuse any User Material posted or provided to
                    the Company by a User.
                  </p>
                </li>
                <li>
                  <p className="font-medium my-2">
                    2.5 The User’s Registration Details and data relating to its
                    use of the Website will be recorded by the Company, but this
                    information shall not be disclosed to third parties
                    (otherwise than on an aggregated, anonymous basis, or in
                    accordance with the Privacy Policy or in accordance with
                    Clause 2.6 below) nor used for any purpose unrelated to the
                    Website. By agreeing to the terms, you expressly give us
                    permission to verify the authenticity of your details by
                    calling you on the phone number submitted to us. The call
                    may be recorded for quality assurance.
                  </p>
                </li>
                <li>
                  <p className="font-medium my-2">
                    2.6 The User hereby authorises the Company to use any
                    information which it submits to the Website to inform the
                    User of special offers, occasional third party offers and
                    for other marketing and related purposes. Without prejudice
                    to Clause 2.5 above, the Company will not use User data for
                    any other purposes than as set out in these Terms except
                    that the Company may disclose this data if compelled to do
                    so by law, or at the request of a law enforcement agency or
                    governmental authority.
                  </p>
                </li>
                <li>
                  <p className="font-medium my-2">
                    2.7 If the User does not wish the Company to use its
                    information as set out in Clause 2.6 above, it should leave
                    the Website before submitting its personal details.
                  </p>
                </li>
                <li>
                  <p className="font-medium my-2">
                    2.8 If the User does not want the Company to use its email
                    address or SMS/mobile number to send information concerning
                    the Website and related matters, the User should send an
                    email message to contact@ekohub.info insert unsubscribe as
                    the subject heading of such message.
                  </p>
                </li>
                <li>
                  <p className="font-medium my-2">
                    2.9 You must keep confidential any user identification and
                    password details set-up or given to you as part of our
                    security procedures and must not disclose them to any third
                    party.
                  </p>
                </li>
                <li>
                  <p className="font-medium my-2">
                    2.10 The Company reserves the right to suspend or terminate
                    a User’s account where, in its absolute discretion, it deems
                    the User has breached these terms or deems such suspension
                    or termination is otherwise appropriate. In the event of
                    such suspension or termination, the Company will notify the
                    User by email and the User must not seek to re-register on
                    any Website either directly or indirectly through a related
                    entity. The Company’s rights under this Clause 2.10 shall
                    not prejudice any other right or remedy the Company may have
                    in respect of any breach, or any rights, obligations or
                    liabilities accrued prior to such suspension or termination.
                  </p>
                </li>
                <li>
                  <p className="font-medium my-2">
                    2.11 For the avoidance of doubt, the Company is providing a
                    service not goods.
                  </p>
                </li>
                <li>
                  <p className="font-medium my-2">
                    2.12 The Eko Hub owns all Intellectual Property Rights in
                    and associated with the Website and the Service, including
                    without limitation, any trademarks, trade names, designs,
                    text, graphics and the selection and arrangement thereof.
                    Nothing contained in the Website should be construed as
                    granting by implication or otherwise, any license or right
                    to use any trademark displayed on the Website without our
                    written permission. You may print off one copy, and may
                    download extracts, of any page(s) from the Website for your
                    personal use and you may draw the attention of others to
                    content posted on the Website, but you must not modify the
                    digital or paper copies of any materials you have printed
                    off or downloaded in any way, and you must not use any
                    photographs or videos separately from any accompanying text.
                    You agree not to circumvent, disable, or otherwise interfere
                    with security related features of the Website or features
                    that prevent or restrict use or copying of any Materials or
                    enforce limitations on use of the Website or the Materials
                    therein. Material displayed on or through the Service is
                    protected by copyright as a collective work and/or
                    compilation, pursuant to copyrights laws, other laws, and
                    international conventions. Any reproduction, modification,
                    creation of derivative works from or redistribution of the
                    Website, the Materials, or the collective work or
                    compilation is expressly prohibited. Copying or reproducing
                    the Website, the Materials, or any portion thereof for
                    further reproduction or redistribution is expressly
                    prohibited.
                  </p>
                </li>
                <li>
                  <p className="font-medium my-2">
                    2.13 The Company takes reported and actual infringement of
                    Intellectual Property Rights and fraud extremely seriously
                    and whilst Users cannot hold the Company liable in relation
                    to such issues, the Company requests all Users to report
                    such matters immediately to the Company, and the Company
                    inform the appropriate authorities.
                  </p>
                </li>
                <li>
                  <p className="font-medium my-2">
                    2.14 If you are an owner of Intellectual Property Rights or
                    an agent who is fully authorised to act on behalf of the
                    owner of Intellectual Property Rights and believe that any
                    Material or other content infringes upon your Intellectual
                    Property Right or the Intellectual Property Rights of the
                    owner on whose behalf you are authorised to act, you may
                    submit a notification to the Company together with a request
                    to the Company to delete the relevant Material in good
                    faith. The notification and the request must contain the
                    following information:
                  </p>
                  <p className="ml-4 my-2">
                    2.14.1 a physical or electronic signature of a person
                    authorised to act on behalf of the owner of an exclusive
                    right that is allegedly infringed;
                  </p>
                  <p className="ml-4 my-2">
                    2.14.2 identification of the Intellectual Property Rights
                    claimed to have been infringed, or, if multiple Intellectual
                    Property Rights can be covered by a single notification, a
                    representative list of such works;
                  </p>
                  <p className="ml-4 my-2">
                    2.14.3 identification of the Material (by means of data or
                    communication link, etc.) that is claimed to be infringing
                    or to be the subject of infringing activity and that is to
                    be removed or access to which is to be disabled and
                    information reasonably sufficient to permit the Company to
                    locate the Material;
                  </p>
                  <p className="ml-4 my-2">
                    2.14.4 information reasonably sufficient to permit the
                    Company to contact you, such as an address, telephone
                    number, and an electronic mail address;
                  </p>
                  <p className="ml-4 my-2">
                    2.14.5 a signed statement that you have a good faith belief
                    that use of the Material in the manner complained of is not
                    authorised by the Intellectual Property Rights owner, its
                    agent, or the law;
                  </p>
                  <p className="ml-4 my-2">
                    2.14.6 a signed statement that the Intellectual Property
                    Rights owner holds the Company harmless from any claim of
                    any third party in connection with the Company removing the
                    relevant content; and
                  </p>
                  <p className="ml-4 my-2">
                    2.14.7 a signed statement that the information in the
                    notification is accurate and under penalty of perjury that
                    you are authorised to act on behalf of the owner of an
                    exclusive right that is allegedly infringed.
                  </p>
                </li>
                <li>
                  <p className="font-medium my-2">
                    2.15 All notifications under Clauses 2.13 and 2.14 must be
                    sent to{' '}
                    <strong className="text-red-400">
                      contact@ekohub.info
                    </strong>
                  </p>
                </li>
                <li>
                  <p className="font-medium my-2">
                    2.16 Users will be invited to send comments to the Company
                    email relating to the integrity and performance of other
                    Users.
                  </p>
                </li>
                <li>
                  <p className="font-medium my-2">
                    2.17 The following restrictions shall apply to all Users.
                    You must:
                  </p>
                  <p className="ml-4 my-2">
                    2.17.1 not use the Website or the Service in any unlawful
                    manner, for any unlawful purpose, or in any manner
                    inconsistent with these Terms, or act fraudulently or
                    maliciously, for example, by hacking into or inserting
                    malicious code, such as viruses, or harmful data, into the
                    Website or any Service or any operating system;
                  </p>
                  <p className="ml-4 my-2">
                    2.17.2 not transmit any material designed to interrupt,
                    damage, destroy or limit the functionality of the Website or
                    the Service;
                  </p>
                  <p className="ml-4 my-2">
                    2.17.3 use any form of automated device or computer program
                    (sometimes referred to as “flagging tools”) that enables the
                    use of the Company’s “flagging system” or other community
                    control systems without each flag being manually entered by
                    a human that initiates the flag (an “automated flagging
                    device”), or use any such flagging tool to remove posts of
                    competitors, other third parties or to remove posts without
                    a reasonable good faith belief that the post being flagged
                    violates these terms or any applicable law or regulation;
                  </p>
                  <p className="ml-4 my-2">
                    2.17.4 not use any automated software to view the Service
                    without our consent (including use of spiders, robots,
                    crawlers, data mining tools, or the like to download or
                    scrape data from the Service, except for internet search
                    engines (e.g., Google) and non-commercial public archives
                    (e.g., archive.org) and only access the Service manually;
                  </p>
                  <p className="ml-4 my-2">
                    2.17.5 not use the Service other than for your own personal
                    use or as an agent listing property for sale and to rent;
                  </p>
                  <p className="ml-4 my-2">
                    2.17.6 not attempt to copy any Material or reverse engineer
                    any processes without the Company’s consent;
                  </p>
                  <p className="ml-4 my-2">
                    2.17.7 not use any Service in any manner that is illegal,
                    immoral or harmful to the Eko Hub;
                  </p>
                  <p className="ml-4 my-2">
                    2.17.8 not use any Service in breach of any policy or other
                    notice on the Website;
                  </p>
                  <p className="ml-4 my-2">
                    2.17.9 not remove or alter any copyright notices that appear
                    on the Website;
                  </p>
                  <p className="ml-4 my-2">
                    2.17.10 not publish any User Material which is or may be
                    Unacceptable or that may encourage a breach of any relevant
                    laws or regulations;
                  </p>
                  <p className="ml-4 my-2">
                    2.17.11 not interfere with any other User’s enjoyment of the
                    Website or the Service;
                  </p>
                  <p className="ml-4 my-2">
                    2.17.12 not conduct yourself in an offensive or abusive
                    manner whilst using the Website or the Service;
                  </p>
                  <p className="ml-4 my-2">
                    2.17.13 not contact anyone who has asked not to be
                    contacted, or make unsolicited contact with anyone for any
                    commercial purpose, specifically, contact any User to post
                    advertisement on a third party website or post any
                    advertisement on behalf of such User;
                  </p>
                  <p className="ml-4 my-2">
                    2.17.14 “stalk” or otherwise harass anyone;
                  </p>
                  <p className="ml-4 my-2">
                    2.17.15 not collect personal data about other Users or
                    entities for commercial or unlawful purposes;
                  </p>
                  <p className="ml-4 my-2">
                    2.17.16 not transmit any User Material that:
                  </p>
                  <p className="my-4 ml-4">
                    harasses, degrades, intimidates or is hateful towards any
                    individual or group of individuals on the basis of religion,
                    gender, sexual orientation, race, ethnicity, age or
                    disability;
                  </p>
                  <p className="my-4 ml-4">
                    includes personal or identifying information about another
                    person without that person's explicit consent;
                  </p>
                  <p className="my-4 ml-4">
                    impersonates any person or entity, including, but not
                    limited to, a Company employee, or falsely states or
                    otherwise misrepresents an affiliation with a person or
                    entity;
                  </p>
                  <p className="ml-4 my-2">
                    {' '}
                    is protected by copyright or patent, protected by trade
                    secret or trademark, or otherwise subject to third party
                    proprietary rights, including privacy and publicity rights,
                    unless you are the owner of such rights or have permission
                    or a license from their rightful owner to post the material
                    and to grant the Company all of the license rights granted
                    herein;
                  </p>
                  <p className="ml-4 my-2">
                    infringes any of the foregoing Intellectual Property Rights
                    of any party, or is User Material that you do not have a
                    right to make available under any law, regulation,
                    contractual or fiduciary relationship(s);
                  </p>
                  <p className="ml-4 my-2">
                    constitutes or contains “pyramid schemes”, “jokes”,
                    “affiliate marketing,” “link referral code,” “junk mail,”
                    “spam,” “chain letters,” “bait marketing”, “negative option
                    marketing”, “referral selling” or unsolicited advertisements
                    of a commercial nature;
                  </p>
                  <p className="ml-4 my-2">
                    constitutes or contains any form of advertising or
                    solicitation if: (i) posted in areas or categories of the
                    Website which are not designated for such purposes; or (ii)
                    e-mailed to the Company Users who have requested not to be
                    contacted about other services, products or commercial
                    interests; and
                  </p>
                  <p className="ml-4 my-2">
                    includes links to commercial services or third-party
                    websites, except as specifically allowed by the Company.
                  </p>
                </li>
                <li>
                  <p className="font-medium my-2">
                    2.18 By submitting User Material on the Website or
                    otherwise, the User grants the ekohub a royalty-free,
                    perpetual, irrevocable and non-exclusive right and license
                    to use, reproduce, distribute, display, modify and edit the
                    User Material. EkoHub will not pay the User any fees
                    whatsoever for the User Material and reserves the right in
                    its sole discretion to remove or edit the User Material at
                    any time. The User warrants and represents that it has all
                    rights, consents and/or authorisations in respect of the
                    User Material necessary to grant the EkoHub these rights.
                  </p>
                </li>
                <li>
                  <p className="font-medium my-2">
                    2.19 The Company permits the User to post User Material on
                    the Website in accordance with the Company’s procedures
                    provided that User Material is not illegal, misleading,
                    obscene, abusive, threatening, defamatory or otherwise
                    objectionable to the Company. You must not post any
                    Unacceptable material and, in respect of any User Material
                    you post, you warrant that it is not Unacceptable.
                  </p>
                </li>
                <li>
                  <p className="font-medium my-2">
                    2.20 The Company grants you a limited, revocable,
                    non-exclusive license to access and use the Service for
                    personal use. This license granted herein does not include
                    any of the following: (a) access to or use of the Service by
                    Posting Agents; or (b) any collection, aggregation, copying,
                    duplication, display or derivative use of the Service nor
                    any use of data mining, robots, spiders, or similar data
                    gathering and extraction tools for any purpose unless
                    expressly permitted by the Company or as otherwise set forth
                    in these Terms. Notwithstanding the foregoing, general
                    purpose internet search engines and non-commercial public
                    archives that gather information for the sole purpose of
                    displaying hyperlinks to the Service, provided they each do
                    so from a stable IP address or range of IP addresses using
                    an easily identifiable agent and comply with our robots.txt
                    file, may engage in the activities set forth in (b). For
                    purposes of this exception, a “general purpose internet
                    search engine” does not include a website or search engine
                    or other service that specialises in classified listings
                    including any subset of classifieds listings such as
                    housing, for sale, jobs, services, or personals, or which
                    otherwise provides classified ad listing services. The
                    license set forth in this Clause 2.20 permits you to display
                    on your website, or create a hyperlink thereto, individual
                    postings on the Service so long as such use is for
                    non-commercial and/or news reporting purposes only (e.g.,
                    for use in personal blogs or other personal online media).
                    The Company may limit the amount of postings displayed on or
                    linked to your website. Use of the Service beyond the scope
                    of authorised access as set forth in these Terms immediately
                    terminates any permission or license granted herein. In
                    order to collect, aggregate, copy, duplicate, display or
                    make derivative use of the Service or any Material made
                    available via the Service for other purposes (including
                    commercial purposes) not stated herein, you must first
                    obtain a license from the Company.
                  </p>
                </li>
                <li>
                  <p className="font-medium my-2">
                    2.21 The Company offers a service known as “Featured Ads”
                    where users may pay a non-refundable fee to have their ads
                    posted in selected locations on the Website, thus
                    potentially increasing an ads' visibility. In order to
                    purchase a Featured Ad, you may be required to transmit
                    certain information through a third-party service provider,
                    Click & Buy, a third-party website, that may be governed by
                    its own terms of use and other policies. The Company makes
                    no representation or guarantee as to the safety or security
                    of the information transmitted to any third-party website,
                    and your linking to any third party website is completely at
                    your own risk, and the Company disclaims all liability
                    related thereto.
                  </p>
                </li>
                <li>
                  <p className="font-medium my-2">
                    2.22 The Company may employ a third-party provider for
                    processing credit card payments for users that use the
                    Product(s) or services provided. Such third-party provider
                    may have access to personal information provided by users
                    needed in order to perform their functions but may not use
                    it for any other purpose. The Company does not have access
                    to or retain any user’s payment information.
                  </p>
                </li>
              </ul>
            </article>
            <article className="my-4">
              <p className="font-bold my-2">3. PAID POSTINGS </p>
              <ul>
                <li>
                  <p className="font-medium my-2">
                    3.1 The Company may charge a fee to post Material in some
                    specific areas of the Service (“Paid Material ”). The fee
                    permits Paid Material to be posted in a designated area of
                    the Website. Each party posting Paid Material to the Service
                    is responsible for the Material and compliance with these
                    terms. Any such fees paid hereunder are non-refundable in
                    the event any Material is removed from the Service for
                    violating these terms. Additional terms regarding Paid
                    Material will be fully stated in the applicable section(s).
                  </p>
                </li>
                <li>
                  <p className="font-medium my-2">
                    3.2 All job ads that announce several positions in one ad
                    will be deleted after 24 hours of their posting and no
                    refund will be given. Within the first 24 hours of the
                    posting, the user can edit the multiple-position ad to
                    reduce it to one position. If the ad does not get edited to
                    fulfil the Company’s requirements, the ad will be deleted,
                    and no refund given.
                  </p>
                </li>
              </ul>
            </article>
            <article className="my-4">
              <p className="font-bold my-2">4. POSTING AGENTS </p>
              <ul>
                <li>
                  <p className="font-medium my-2">
                    4.1 The Company prohibits the use of Posting Agents,
                    directly or indirectly, without the express written
                    permission of the Company. In addition, Posting Agents are
                    not permitted to post Material on behalf of others, directly
                    or indirectly, or otherwise access the Service in order to
                    post Material on behalf of others, except with express
                    written permission or license from the Company.
                  </p>
                </li>
              </ul>
            </article>
            <article className="my-4">
              <p className="font-bold my-2">5. NO SPAM POLICY</p>
              <ul>
                <li>
                  <p className="font-medium my-2">
                    5.1 You understand and agree that sending unsolicited email
                    advertisements or other unsolicited communications to the
                    Company addresses or through the Company computer systems
                    are expressly prohibited by these Terms. You acknowledge and
                    agree that from time to time the Company may monitor email
                    usage using human monitors or automated software to flag
                    certain words associated with spam or scams in emails that
                    are sent between one User to another in the Company’s e-mail
                    system. Any communication between yourself and any other
                    User utilising the communication features available on the
                    Service and the Website may be used only in accordance with
                    these Terms.
                  </p>
                </li>
                <li>
                  <p className="font-medium my-2">
                    5.2 Any unauthorised use of the Company computer systems is
                    a violation of these Terms and certain applicable laws, in
                    particular the Nigeria Cybercrimes legislation. Such
                    violations may subject the sender and his or her agents to
                    civil and criminal penalties. Please note that the Nigeria
                    Cybercrimes legislation carries significant penalties
                    including imprisonment. In case you intend to solicit or
                    contact our Users by obtaining their email or phone numbers
                    from our Website, we may report this behaviour to the
                    relevant authorities, who then may decide to prosecute you
                    under the relevant Nigeria laws.
                  </p>
                </li>
                <li>
                  <p className="font-medium my-2"></p>
                </li>
              </ul>
            </article>
            <article className="my-4">
              <p className="font-bold my-2">6. LIMITATION OF LIABILITY</p>
              <ul>
                <li>
                  <p className="font-medium my-2">
                    6.1 The Company shall not be liable for any:
                  </p>
                  <p className="my-4 ml-4">
                    6.1.1 consequential, indirect, special losses or exemplary
                    damages (even if the Company has been advised of the
                    possibility of such losses or damages);
                  </p>
                  <p className="my-4 ml-4">6.1.2 loss of profit;</p>
                  <p className="my-4 ml-4">6.1.3 loss of business;</p>
                  <p className="my-4 ml-4">6.1.4 loss of revenue;</p>
                  <p className="my-4 ml-4">
                    6.1.5 loss of or corruption to data;
                  </p>
                  <p className="my-4 ml-4">6.1.6 loss of use;</p>
                  <p className="my-4 ml-4">6.1.7 loss of production;</p>
                  <p className="my-4 ml-4">6.1.8 loss of contract;</p>
                  <p className="my-4 ml-4">6.1.9 loss of opportunity;</p>
                  <p className="my-4 ml-4">
                    6.1.10 loss of savings, discount or rebate (whether actual
                    or anticipated);
                  </p>
                  <p className="my-4 ml-4">
                    6.1.11 harm to reputation or loss of goodwill;
                  </p>
                  <p className="my-4 ml-4">
                    6.1.12 loss of anticipated savings,
                  </p>
                  <p className="my-4 ml-4">
                    (In the cases of Clauses ‎6.1.2 to 6.1.12 (inclusive),
                    whether direct or indirect), howsoever arising suffered by
                    any User arising in any way in connection with these Terms
                    or for any liability of a User to any third party.
                  </p>
                </li>
                <li>
                  <p className="font-medium my-2">
                    6.2 The limitations at Clause 6.1 shall also apply with
                    respect to damages incurred by reason of other services or
                    products received through or advertised in connection with
                    the Website or the Service or any links on the Website, as
                    well as by reason of any information, opinions or advice
                    received through or advertised in connection with the
                    Website or the Service or any links to the Website or
                    Service.
                  </p>
                </li>
                <li>
                  <p className="font-medium my-2">
                    6.3 The limitations in this Clause 6 shall apply to the
                    fullest extent permitted by law. You specifically
                    acknowledge and agree that the Company shall not be liable
                    for user submissions or the defamatory, offensive, or
                    illegal conduct of any user or third party and that the risk
                    of harm or damage from the foregoing rests entirely with
                    you.
                  </p>
                </li>
                <li>
                  <p className="font-medium my-2">
                    6.4 Whilst the Company will take all reasonable attempts to
                    exclude viruses from the Website, it cannot ensure such
                    exclusion and no liability is accepted for viruses. The User
                    is recommended to take all appropriate safeguards before
                    accessing or downloading information or any Material from
                    the Website.
                  </p>
                </li>
                <li>
                  <p className="font-medium my-2">
                    6.5 The Website includes information and materials uploaded
                    by other users of the Website. This information and these
                    materials have not been verified or approved by the Company
                    and the Company shall not be liable for any material which
                    may be deemed Unacceptable. You further may be exposed to
                    Material that is inaccurate, offensive, indecent,
                    objectionable, defamatory, or libellous and, as far as the
                    law allows, and subject to Clause 6.11, you agree to waive,
                    and hereby do waive, any legal or equitable rights or
                    remedies you have or may have against the Company with
                    respect thereto.
                  </p>
                </li>
                <li>
                  <p className="font-medium my-2">
                    6.6 The Company does not guarantee that the Website will
                    always be accessible, uninterrupted, timely, secure, error
                    free or free from computer virus or other invasive or
                    damaging code or that the Website will not be affected by
                    force majeure events, including inability to obtain or
                    shortage of necessary materials, equipment facilities, power
                    or telecommunications, lack of telecommunications equipment
                    or facilities and failure of information technology or
                    telecommunications equipment or facilities. The Company may
                    suspend or withdraw or restrict the availability of all or
                    any part of the Website for business and operational reasons
                    at any time and shall not be liable for any interruption to
                    the Service, whether intentional or otherwise. We recommend
                    that you back up any content and data used in connection
                    with the Website, to protect yourself in case of problems
                    with the Website or the Service.
                  </p>
                </li>
                <li>
                  <p className="font-medium my-2">
                    6.7 The Company is not liable for any failure in respect of
                    its obligations hereunder which result directly or
                    indirectly from failure or interruption in software or
                    services provided by third parties.
                  </p>
                </li>
                <li>
                  <p className="font-medium my-2">
                    6.8 The Company is not responsible for the direct or
                    indirect consequences of a User linking to any other website
                    from the Website and has not approved such linked websites
                    or the material or information available from them.
                  </p>
                </li>
                <li>
                  <p className="font-medium my-2">
                    6.9 The Company does not guarantee, represent or warrant
                    that the information accessible via the Website is accurate,
                    complete or current. The Company has no liability whatsoever
                    in respect of any use which the User makes of such
                    information. The Website, the Service, and use of all
                    related facilities are provided on an “as is, as available”
                    basis without any warranties whether express or implied.
                  </p>
                </li>
                <li>
                  <p className="font-medium my-2">
                    6.10 The Website and the Service have not been developed
                    (and Material has not been written) to meet the individual
                    requirements of the User and it is the User’s sole
                    responsibility to satisfy itself prior to entering into any
                    transaction or decision that the Website, the Service and
                    the Material are suitable for its purposes. A User in making
                    any financial or other decision based on Material or other
                    information in the Website accepts that it does so
                    exclusively at its own risk and the Company shall have no
                    liability in respect of the same.
                  </p>
                </li>
                <li>
                  <p className="font-medium my-2">
                    6.11 None of the Clauses herein shall apply so as to
                    restrict liability for death or personal injury resulting
                    from the negligence of the Company or its appointed agents.
                  </p>
                </li>
                <li>
                  <p className="font-medium my-2">
                    6.12 The Website is controlled and offered by the Company
                    from facilities in Dubai in the United Arab Emirates. The
                    Company makes no representations or warranties that the
                    Website is appropriate for use in other locations. Those who
                    access or use the Website from other jurisdictions do so at
                    their own volition and risk and are responsible for
                    compliance with local law.
                  </p>
                </li>
              </ul>
            </article>
            <article className="my-4">
              <p className="font-bold my-2">7. JOBS WANTED</p>
              <ul>
                <li>
                  <p className="font-medium my-2">
                    7.1 The Company is not responsible for the information
                    posted by the job seekers in the Jobs Wanted section or in
                    their CVs. The CV Search is a form of head hunting, it
                    allows recruiters to look through the CVs in our database.
                    However, some of the applicants may or may not match the job
                    position you are looking to fill. Any fees paid are
                    non-refundable once the package is used. The duration of the
                    CV Search cannot be extended.
                  </p>
                </li>
                <li>
                  <p className="font-medium my-2">
                    7.2 By placing a job seeking ad in the Jobs Wanted section,
                    the recruiter will have access to the CV uploaded to the job
                    seeker's profile. Once an applicant uploads their CV to
                    their profile, it will be added to our database where
                    recruiters will have access to it for 18 months.
                  </p>
                </li>
              </ul>
            </article>
            <article className="my-4">
              <p className="font-bold my-2">8. INDEMNITY</p>
              <ul>
                <li>
                  <p className="font-medium my-2">
                    8.1. The User agrees to defend, indemnify and hold harmless
                    the Company, the EKO HUB and each of their officers,
                    subsidiaries, affiliates, successors, assigns, directors,
                    officers, agents, service providers, suppliers and
                    employees, from and against any and all claims, damages,
                    obligations, losses (whether direct, indirect or
                    consequential), liabilities, costs or debt, and expenses
                    (including but not limited to attorneys’ fees) arising from
                    (a) your improper use of, or your inability to use, the
                    Website or the Service; (b) your breach of any provision of
                    these Terms; and/or (c) your violation of any third party
                    right, including without limitation any copyright,
                    trademark, trade secret or other property, or privacy right.
                    As far as the law allows, this defence and indemnification
                    obligation will survive termination, modification or
                    expiration of these Terms and your use of the Website and
                    the Service.
                  </p>
                </li>
              </ul>
            </article>
            <article className="my-4">
              <p className="font-bold my-2">
                9. PROPERTY FOR SALE AND PROPERTY FOR RENT CATEGORIES ON THE
                WEBSITE
              </p>
              <p>
                If you are listing a property on this Website, your obligations
                are as follows:
              </p>
              <p className="font-bold my-2">Brokers</p>
              <ul>
                <li>
                  <p className="font-medium my-2">
                    9.1. You warrant that you possess a valid license from the
                    Real Estate Regulatory Authority (RERA), or its equivalent
                    in Nigeria in which you are advertising.
                  </p>
                </li>
                <li>
                  <p className="font-medium my-2">
                    9.2. If a project is off plan (under construction), you
                    warrant that the project is registered with RERA.
                  </p>
                </li>
                <li>
                  <p className="font-medium my-2">
                    9.3. If you are engaging in subleasing activities, you
                    warrant that you possess a license for the activity of
                    “Leasing and Management of Other People’s Property” from
                    both Nigeria Department of Economic Development (DED and
                    RERA).
                  </p>
                </li>
                <li>
                  <p className="font-medium my-2">
                    9.4. If you are engaging in short-term or Holiday Home
                    leasing, you warrant that you possess a license for the
                    activity from Nigeria Housing Department.
                  </p>
                </li>
                <li>
                  <p className="font-medium my-2">
                    9.5. As per the housing regulations, you must obtain
                    approval for every sale or leasing advertisement (located
                    within or outside of Nigeria) and display the Housing Permit
                    Number, Office Registration Number and Broker Registration
                    Number on all advertisements.
                  </p>
                </li>
              </ul>
              <p className="font-bold my-2">Developers</p>
              <ul>
                <li>
                  <p className="font-medium my-2">
                    9.6. You warrant that you possess a valid license from EKO
                    HUB, or its equivalent in the Nigeria housing in which you
                    are advertising.
                  </p>
                </li>
                <li>
                  <p className="font-medium my-2">
                    9.7. If a project is off plan (under construction), you
                    warrant that it is registered with EKO HUB and hold a EKO
                    HUB approved Escrow Account for the project.
                  </p>
                </li>
                <li>
                  <p className="font-medium my-2">
                    9.8. As per Nigeria housing regulations, you must obtain
                    approval for every property advertisement (located within or
                    outside of Nigeria and display the Housing Permit Number on
                    all advertisements.
                  </p>
                </li>
              </ul>
              <p className="font-bold my-2">Owners and Landlords</p>
              <ul>
                <li>
                  <p className="font-medium my-2">
                    9.9. You warrant that you are the Owner/Landlord of the
                    property, or otherwise possess valid authorisation to list
                    the property on the Website.
                  </p>
                </li>
                <li>
                  <p className="font-medium my-2">
                    9.10. If you are engaging in short-term or Holiday Home
                    Leasing, you warrant that you possess a license for the
                    activity from Dubai Tourism and Commerce Marketing (DTCM).
                  </p>
                </li>
              </ul>
              <p className="font-bold my-2">Tenants</p>
              <ul>
                <li>
                  <p className="font-medium my-2">
                    9.11. You warrant that you possess valid, written consent
                    from your Landlord before advertising on the Website, and
                    that you are legally entitled to publish such advertisement.
                  </p>
                </li>
              </ul>
              <p className="font-bold my-2">All Advertisers</p>
              <ul>
                <li>
                  <p className="font-medium my-2">
                    9.12. You may only advertise properties that are currently
                    available for sale or lease. It is at our discretion to
                    remove any listings (advertising fees will not be refunded).
                  </p>
                </li>
                <li>
                  <p className="font-medium my-2">
                    9.13. You warrant that the advertisement does not contain
                    unlawful language or use of the premises, including:
                  </p>
                  <p className="ml-4 my-2">
                    9.13.1 defamatory, misleading or deceptive statements;
                  </p>
                  <p className="ml-4 my-2">
                    9.13.2 sharing of a property that exceeds lawful occupancy
                    limits (including, but not limited to, bachelor
                    accommodations and multi-family use);
                  </p>
                  <p className="ml-4 my-2">
                    9.13.3 sharing of a property between unrelated members of
                    the opposite sex;
                  </p>
                  <p className="ml-4 my-2">
                    9.13.4 sharing of a property in any way that is deemed
                    unlawful; and
                  </p>
                  <p className="ml-4 my-2">
                    9.13.5 any other language that promotes illegal or immoral
                    activities under the law of the Nigeria.
                  </p>
                </li>
                <li>
                  <p className="font-medium my-2">
                    9.14. If you are listing a property on any of the Website,
                    your obligations are as follows:
                  </p>
                  <p className="ml-4 my-2">
                    9.14.1 The Company’s advertisements include real properties
                    for sale or rent. The Company is not a real estate brokerage
                    and the details of the properties available on the Website
                    are provided to us by third party brokers, landlords, owners
                    or developers;
                  </p>
                  <p className="ml-4 my-2">
                    9.14.2 The Company does not verify the property listing
                    details provided to us by third parties, and makes no
                    warranties or representations as to their accuracy or
                    completeness;
                  </p>
                  <p className="ml-4 my-2">
                    9.14.3 You, the User of the Website, must conduct your own
                    due diligence and must not rely on the details in the
                    advertisements; and
                  </p>
                  <p className="ml-4 my-2">
                    9.14.4 The Company does verify the housing license number of
                    all property broker companies prior to allowing them to
                    advertise on the Website.
                  </p>
                </li>
                <li>
                  <p className="font-medium my-2">
                    9.14. If you are listing a property on any of the Website,
                    your obligations are as follows:
                  </p>
                  <p className="ml-4 my-2">
                    9.14.1 The Company’s advertisements include real properties
                    for sale or rent. The Company is not a real estate brokerage
                    and the details of the properties available on the Website
                    are provided to us by third party brokers, landlords, owners
                    or developers;
                  </p>
                  <p className="ml-4 my-2">
                    9.14.2 The Company does not verify the property listing
                    details provided to us by third parties, and makes no
                    warranties or representations as to their accuracy or
                    completeness;
                  </p>
                  <p className="ml-4 my-2">
                    9.14.3 You, the User of the Website, must conduct your own
                    due diligence and must not rely on the details in the
                    advertisements; and
                  </p>
                  <p className="ml-4 my-2">
                    9.14.4 The Company does verify the housing license number of
                    all property broker companies prior to allowing them to
                    advertise on the Website.
                  </p>
                </li>
              </ul>
              <p className="font-bold my-2">Motors Category</p>
              <ul>
                <li>
                  <p className="font-medium my-2">
                    9.15. As a User of the Website, you must not offer for sale
                    any type of car, motor vehicle or motorcycle (“Vehicle ”)
                    that is:
                  </p>
                  <p className="ml-4 my-2">
                    9.15.1 located outside of the Nigeria, unless you can prove
                    ownership of the Vehicle upon request;
                  </p>
                  <p className="ml-4 my-2">
                    9.15.2 that is not immediately for sale;
                  </p>
                  <p className="ml-4 my-2">
                    9.15.3 that is not accurately described by the category in
                    which it is advertised;
                  </p>
                  <p className="ml-4 my-2">
                    9.15.4 that you are not the owner of, or in all other cases,
                    which you do not have the rights to sell; or
                  </p>
                  <p className="ml-4 my-2">
                    9.15.5 without true and accurate pricing of the Vehicle
                    displayed within the listing.
                  </p>
                </li>
                <li>
                  <p className="font-medium my-2">
                    9.16. We may request that you provide proof of ownership,
                    and that the Vehicle is located in the Nigeria or has been
                    cleared by Nigeria customs. If you do not provide us with
                    proof within 24 hours of request, we may immediately remove
                    the relevant advertisement/content without further notice
                    and no refund will be made.
                  </p>
                </li>
              </ul>
            </article>
            <article className="my-4">
              <p className="font-bold my-2">
                10. CALL RECORDING FOR REAL ESTATE BROKERS
              </p>
              <ul>
                <li>
                  <p className="font-medium my-2">
                    10.1 Some of the Nigeria licensed real estate brokers
                    (Brokers) that advertise on our Website subscribe to a
                    service whereby the property listing has a uniquely
                    identified phone number and the call is automatically
                    recorded for quality and training purposes. By using the
                    Services, you expressly agree to having your phone call
                    recorded when you call a Broker in relation to
                    advertisements in the Property category of the Website and
                    you agree that no further warning or consent is required.
                  </p>
                </li>
              </ul>
            </article>
            <article className="my-4">
              <p className="font-bold my-2">11. AD SERVICES PACKAGE</p>
              <ul>
                <li>
                  <p className="font-medium my-2">
                    11.1 If you are a Client, Customer or any of their officers,
                    directors, employees, agents, contractors, sub-contractors
                    or representatives, the following additional terms also
                    apply to you:
                  </p>
                  <p className="ml-4 my-2">
                    11.1.1 The Company may publish on the Website any
                    information supplied or made available to the Company by or
                    on behalf of the Client. The Client acknowledges and agrees
                    that the Company shall not be regarded as being in breach of
                    any obligation of confidentiality as a result of the
                    publication of such information.
                  </p>
                  <p className="ml-4 my-2">
                    11.1.2 The Company may made operational changes to the Ad
                    Services Package and individual products thereunder at any
                    time. The Company will use reasonable endeavours to provide
                    notification of material changes by posting a message on the
                    Website or by informing the Client.
                  </p>
                  <p className="ml-4 my-2">
                    11.1.3 Subject to Clause 6.11, in no event shall the
                    Company’s liability with respect to the provision of the Ad
                    Services Package to the Client, regardless of the cause of
                    action and losses suffered by the Client, exceed AED 20,000.
                  </p>
                </li>
              </ul>
            </article>
            <article className="my-4">
              <p className="font-bold my-2">12. GENERAL</p>
              <ul>
                <li>
                  <p className="font-medium my-2">
                    12.1 Subject to Clause ‎5.2, these Terms, the Privacy Policy
                    and any other expressly incorporated document constitute the
                    entire agreement between you and the Company and neither
                    party has relied on any representation made by the other
                    party unless such representation is expressly included in
                    these Terms. Nothing in this Clause ‎12.1 shall relieve
                    either party of liability for fraudulent misrepresentations
                    and neither party shall be entitled to any remedy for either
                    any negligent or innocent misrepresentation except to the
                    extent (if any) that a court or arbitrator may allow
                    reliance on the same as being fair and reasonable.
                  </p>
                </li>
                <li>
                  <p className="font-medium my-2">
                    12.2 The Company reserves the right to alter its terms of
                    business from time to time. The Effective Date at the time
                    the User is reading these terms is set out at the top of
                    these Terms. Prior to using the Website again in the future,
                    Users should check that the Effective Date has not changed.
                    If it has, the User should examine the new set of terms and
                    conditions and only use the Website if it accepts the new
                    terms and conditions. If you do not accept the changes, you
                    should immediately discontinue your access to the Website
                    and your use of the Service.
                  </p>
                </li>

                <li>
                  <p className="font-medium my-2">
                    12.3 If any provision of these Terms or part thereof shall
                    be void for whatever reason, it shall be deemed deleted and
                    the remaining provisions shall continue in full force and
                    effect.
                  </p>
                </li>

                <li>
                  <p className="font-medium my-2">
                    12.4 The Company reserves the right to assign or subcontract
                    any or all of its rights and obligations under these Terms.
                    The User may not assign or otherwise transfer its rights or
                    obligations under these Terms without the Company’s prior
                    written consent.
                  </p>
                </li>

                <li>
                  <p className="font-medium my-2">
                    12.5 Any notice given pursuant to these Terms may be served
                    personally or by email to the last known email address of
                    the addressee. It is the responsibility of Users promptly to
                    update the Company of any change of address or email
                    address. Such notice shall be deemed to have been duly
                    served upon and received by the addressee, when served
                    personally, at the time of such service or when sent by
                    email 24 hours after the email has been sent.
                  </p>
                </li>
                <li>
                  <p className="font-medium my-2">
                    12.6 The Company shall not be liable for any loss suffered
                    by the other party or be deemed to be in default for any
                    delays or failures in performance hereunder resulting from
                    acts or causes beyond its reasonable control or from any
                    acts of God, acts or regulations of any governmental or
                    supra-national authority.
                  </p>
                </li>
                <li>
                  <p className="font-medium my-2">
                    12.7 Any delay or forbearance by the Company in enforcing
                    any provisions of these Terms or any of its rights hereunder
                    shall not be construed as a waiver of such provision or
                    right thereafter to enforce the same.
                  </p>
                </li>
                <li>
                  <p className="font-medium my-2">
                    12.8 The headings in these Terms are solely used for
                    convenience and shall not have any legal or contractual
                    significance.
                  </p>
                </li>
                <li>
                  <p className="font-medium my-2">
                    12.9 These Terms shall be governed by and construed in
                    accordance with the law of the Nigeria, and the parties
                    submit to the exclusive jurisdiction of the Nigeria Courts,
                    save that the Company may take action in any relevant
                    jurisdiction to enforce its Intellectual Property Rights.
                    You agree that any cause of action brought by you arising
                    out of or related to your use of the Service and./or the
                    Website must commence within a reasonable time and in any
                    event within one (1) year after the cause of action accrues.
                  </p>
                </li>
                <li>
                  <p className="font-medium my-2">
                    12.10 These Terms shall inure to the benefit of and be
                    binding upon each party's successors.
                  </p>
                </li>
                <li>
                  <p className="font-medium my-2">
                    12.11 If these Terms are translated into any other language
                    and there is a discrepancy between the English text and the
                    text of the other language, the English text version will
                    prevail.
                  </p>
                </li>
                <li>
                  <p className="font-medium my-2">
                    12.12 All website design, text, graphics, the selection and
                    arrangement thereof are Copyright ©2022, ekohub.ng ALL
                    RIGHTS RESERVED.
                  </p>
                </li>
                <li>
                  <p className="font-medium my-2">
                    12.13 Eko Hub is a trademark of EKO HUB Ltd or its
                    subsidiaries and may be registered in certain parts of the
                    world.
                  </p>
                </li>
              </ul>
            </article>
            {/*  terms and conditions */}
            <div>
              <p className="text-center font-bold text-xl">
                TERMS AND CONDITIONS – EKO HUB PREMIUM
              </p>
              <p className="text-center my-4">
                These Terms and Conditions represent the terms and conditions
                subject to which the Services will be provided to Users. The
                Website Terms of Use (https://ekohub.ng/terms/) shall apply in
                conjunction with these Terms and Conditions.
              </p>
              <article className="my-4">
                <p className="font-bold my-2">DEFINITIONS</p>
                <ul>
                  <li>
                    <p className="font-medium my-2">
                      1.1 The following capitalised terms shall have the
                      following meaning, except where the context otherwise
                      requires:
                    </p>
                    <p className="my-2">“Naira”</p>
                    <p className="my-2">
                      “Applicable Law ” means any law, proclamation, decree,
                      ministerial decision, statute, statutory instrument,
                      order, regulation, resolution, notice, legal precedent,
                      by-law, directive, treaty or other instrument or
                      requirement having the force of law within Nigeria and
                      issued, declared, passed or given effect in any manner by
                      any government authority;
                    </p>
                    <p className="my-2">“Buyer” means a buyer of a Device;</p>
                    <p className="my-2">
                      “Device” means a mobile phone, tablet or other electronic
                      device;
                    </p>
                    <p className="my-2">
                      “Intellectual Property Rights ” means all intellectual
                      property, including patents, trademarks, rights in
                      goodwill, database rights and rights in data, rights in
                      designs, copyrights and topography rights (whether or not
                      any of these rights are registered, and including
                      applications and the right to apply for registration of
                      any such rights) and all inventions, rights in know-how,
                      trade secrets and confidential information, customer and
                      supplier lists and other proprietary knowledge and
                      information and all rights under licences and consents in
                      relation to any such rights and all rights and forms of
                      protection of a similar nature or having equivalent or
                      similar effect to any of these which may subsist anywhere
                      in the world for their full term, including any renewals
                      and extensions;
                    </p>
                    <p className="my-2">
                      “List Price” means the price at which a Device is listed
                      for purchase on the Website;
                    </p>
                    <p className="my-2">
                      “Personnel” means a Party’s officers, directors,
                      employees, agents, contractors, sub-contractors and
                      representatives;
                    </p>
                    <p className="my-2">
                      “Registration Details ” means the details a Seller must
                      provide upon registering for the Services and the Website
                      from time to time (for example: name, phone numbers, email
                      address, age, address and/or tax status) and any
                      documentation as may be requested by Eko Hub from time to
                      time;
                    </p>
                    <p className="my-2">“Seller” means a seller of a Device;</p>
                    <p className="my-2">
                      “Seller Offer” means an offer submitted by a Seller to Eko
                      Hub to sell a Device through the Services;
                    </p>
                    <p className="my-2">
                      “Services” means the services provided by Eko Hub,
                      pursuant to which Users can sell and buy Devices through
                      the Website;
                    </p>
                    <p className="my-2">
                      “Terms and Conditions” means these terms and conditions
                      with respect to the Services, as may be amended by Eko Hub
                      from time to time;
                    </p>
                    <p className="my-2">“Unacceptable” means:</p>
                    <p className="ml-2 my-2">
                      (a) illegal, illicit, indecent, obscene, racist,
                      offensive, pornographic, pedophilic, insulting, false,
                      unreliable, misleading, harmful or potentially harmful to
                      minors, threatening, libelous, alleged to be or actually
                      defamatory or in infringement of third-party rights (of
                      whatever nature and including, without limitation, any
                      Intellectual Property Rights), invasive of another’s
                      privacy or other rights, to relate to or encourage money
                      laundering or illegal gambling;
                    </p>
                    <p className="ml-2 my-2">
                      (b) in breach of any applicable regulations, standards or
                      codes of practice (notwithstanding that compliance may not
                      be compulsory);
                    </p>
                    <p className="ml-2 my-2">
                      (c) in contravention of legislation, including without
                      limitation, that relating to weapons, animals or alcohol;
                      or
                    </p>
                    <p className="ml-2 my-2">
                      (d) harmful to EKOHUB'S reputation.
                    </p>
                    <p className="my-2">
                      “Users” means Sellers and Buyers, and each shall be
                      referred to as a “User”;
                    </p>
                    <p className="my-2">“VAT” means value-added-tax; and</p>
                    <p className="my-2">
                      “Website Terms of Use ” means the Website user terms and
                      all other EKOHUB policies listed on the Website, as
                      amended by EKOHUB from time to time, which can be found at
                      the following link:{' '}
                      <Link
                        to="https://ekohub.ng/terms/"
                        className="text-red-400"
                      >
                        https://ekohub.ng/terms/
                      </Link>
                    </p>
                    <p className="my-2"></p>
                    <p className="my-2"></p>
                  </li>
                </ul>
              </article>
              <article className="my-4">
                <p className="font-bold my-2">2. GENERAL TERMS</p>
                <ul>
                  <li>
                    <p className="font-medium my-2">
                      2.1 These Terms and Conditions shall be applicable with
                      respect to the Services, and Users agree to fully comply
                      with them by using the Services.
                    </p>
                  </li>
                  <li>
                    <p className="font-medium my-2">
                      2.2 Eko Hub may revise, amend, discontinue or make any
                      other changes to the Services at any time. Eko hub will
                      use reasonable endeavours to provide notification of
                      material changes by posting a message on the Website or by
                      informing Users.
                    </p>
                  </li>
                  <li>
                    <p className="font-medium my-2">
                      2.3 Users warrant and represent that all information
                      supplied or made available to Eko hub by or on behalf of
                      Users is true, accurate and not misleading or deceptive.
                      Eko hub has the right, but not the obligation, to remove
                      from the Website without notice any content supplied by or
                      information relating to Users whenever Ekohub deems such
                      action necessary in its absolute discretion.
                    </p>
                  </li>
                  <li>
                    <p className="font-medium my-2">
                      2.4 Users shall, when using the Services:
                    </p>
                    <p className="ml-2 my-2">
                      (a) ensure that Users and their respective Personnel
                      comply with the Website Terms of Use and Applicable Law;
                      and
                    </p>
                    <p className="ml-2 my-2">
                      (b) obtain all necessary rights, licences and consents
                      from regulatory authorities and other third parties.
                    </p>
                  </li>
                  <li>
                    <p className="font-medium my-2">
                      2.5 Users shall ensure that their respective Personnel
                      comply with all security procedures relevant to the use of
                      the Services and interacting with Eko hub Users shall
                      inform Ekohub immediately if relevant security credentials
                      are compromised in any way. Users shall indemnify (and
                      keep indemnified) Eko hub for any loss to Eko hub
                      resulting from the disclosure of any security credentials
                      to a third party and/or failure by Users to keep any
                      security credentials secure, whether such disclosure or
                      failure was committed by an employee of such Users or
                      otherwise.
                    </p>
                  </li>
                  <li>
                    <p className="font-medium my-2">
                      2.6 Users hereby consent to the monitoring and recording
                      by Eko hub (or any of its suppliers) at any time of any
                      communications, information or data exchanged between the
                      Parties or suppliers of the Parties and in connection with
                      these Terms and Conditions, use of the Services and the
                      Website (whether this is through the use of call tracking
                      software or otherwise).
                    </p>
                  </li>
                  <li>
                    <p className="font-medium my-2">
                      2.7 Ekohub will not be liable for any delay or failure to
                      perform any of its obligations under these Terms and
                      Conditions by reasons, events or other matters beyond Eko
                      hub reasonable control, including but not limited to the
                      collection and the delivery of Devices.
                    </p>
                  </li>
                  <li>
                    <p className="font-medium my-2">
                      2.8 No failure or delay by either Party to enforce, or
                      exercise, or any partial, single or defective exercise of
                      enforcement, of any right, remedy, power or privilege
                      given to that Party pursuant to these Terms and Conditions
                      shall constitute a waiver or partial waiver of any right,
                      remedy, power or privilege or operate to prevent the
                      exercise or enforcement of any further right, remedy,
                      power or privilege at any subsequent time. Any waiver of
                      any right, remedy, power or privilege will be effective
                      only if made in writing.
                    </p>
                  </li>
                  <li>
                    <p className="font-medium my-2">
                      2.9 Eko hub is entitled to assign or subcontract any or
                      all of its rights and obligations under these Terms and
                      Conditions. A User shall not assign or otherwise transfer
                      its rights, interests or obligations under these Terms and
                      Conditions to any third party without the prior written
                      consent of Eko Hub
                    </p>
                  </li>
                  <li>
                    <p className="font-medium my-2">
                      2.10 Nothing in these Terms and Conditions shall be
                      construed as creating any agency, partnership or joint
                      venture between the Parties.
                    </p>
                  </li>
                  <li>
                    <p className="font-medium my-2">
                      2.11 Nothing in these Terms and Conditions shall confer,
                      nor be intended to confer, any right or benefit on any
                      third party.
                    </p>
                  </li>
                  <li>
                    <p className="font-medium my-2">
                      2.12 If any term of these Terms and Conditions is found to
                      be illegal, void, invalid or unenforceable under the laws
                      of any jurisdiction this will not affect the legality,
                      validity and enforceability of the remainder of these
                      Terms and Conditions in that jurisdiction, and the
                      legality, validity and enforceability of these Terms and
                      Conditions in any other jurisdiction shall not be
                      affected.
                    </p>
                  </li>
                  <li>
                    <p className="font-medium my-2">
                      2.13 If there is any conflict between the terms of these
                      Terms and Conditions and the Website Terms of Use, these
                      Terms and Conditions shall prevail.
                    </p>
                  </li>
                  <li>
                    <p className="font-medium my-2">
                      2.14 If these Terms and Conditions are translated into any
                      other language, and there is a discrepancy between the
                      English text and the text of the other language, the
                      English text will govern.
                    </p>
                  </li>
                  <li>
                    <p className="font-medium my-2">
                      2.15 These Terms and Conditions are governed by the law of
                      Nigeria. Any dispute which is not settled amicably between
                      the Parties shall be finally settled by the courts of the
                      Nigeria Law
                    </p>
                  </li>
                  <li>
                    <p className="font-medium my-2"></p>
                  </li>
                </ul>
              </article>
              <article className="my-4">
                <p className="font-bold my-2">3. SELLER TERMS</p>
                <p className="font-bold my-2"> Seller Requirements</p>
                <ul>
                  <li>
                    <p className="font-medium my-2">3.1 A Seller must:</p>
                    <p className="ml-2 my-2">
                      (a) be at least eighteen (18) years of age, in the case of
                      an individual;
                    </p>
                    <p className="ml-2 my-2">
                      (b) be legally capable of entering into a contract with
                      Eko Hub.
                    </p>
                    <p className="ml-2 my-2">
                      (c) not have any criminal record and be compliant with all
                      Applicable Laws;
                    </p>
                    <p className="ml-2 my-2">
                      (d) be resident in Lagos, Nigeria, and
                    </p>
                    <p className="ml-2 my-2">
                      (e) have valid identification or incorporation documents
                      as requested by Eko Hub in the case of an individual or
                      legal entity, respectively.
                    </p>
                  </li>
                  <li>
                    <p className="font-medium my-2">
                      3.2 Each Seller warrants and represents that:
                    </p>
                    <p className="ml-2 my-2">
                      (a) it is the legal owner of the Device and is legally
                      authorised to sell the Device;
                    </p>
                    <p className="ml-2 my-2">
                      (b) their use of the Website and sale of the Device would
                      not be in breach of any Applicable Law or agreement or
                      contract to which the Seller is a party; and
                    </p>
                    <p className="ml-2 my-2">
                      (c) the Device is free from any encumbrances.
                    </p>
                  </li>
                  <li>
                    <p className="font-medium my-2">
                      3.3 The Seller must provide a true, accurate and correct
                      description of the Device and its specifications
                      including, but not limited, the model, the storage space
                      and the condition.
                    </p>
                  </li>
                  <li>
                    <p className="font-medium my-2">
                      3.4 The Seller must ensure the Device is not blocked or
                      PIN locked when collected by Eko Hub.
                    </p>
                  </li>

                  <li>
                    <p className="font-medium my-2">
                      3.5 In registering for the Services and the Website,
                      Sellers must provide true, accurate, current and complete
                      Registration Details. Sellers must update any changes to
                      their Registration Details (except age).
                    </p>
                  </li>
                  <li>
                    <p className="font-medium my-2">
                      3.6 A Seller must keep confidential any user
                      identification and password details set-up or given to the
                      Seller as part of Eko Hub security procedures and must not
                      disclose them to any third party.
                    </p>
                  </li>
                  <li>
                    <p className="font-medium my-2">
                      3.7 Each Seller is solely responsible for any use of, or
                      action taken under the Seller’s account, and shall fully
                      indemnify Ekohub and its affiliates, directors, officers,
                      employees, authorised representatives, consultants,
                      professional consultants or authorised agents from any
                      damages or injury suffered by Eko Hub resulting from any
                      use of the Seller’s account or any breach of Applicable
                      Law.
                    </p>
                  </li>
                  <li>
                    <p className="font-medium my-2">
                      3.8 Eko Hub reserves the right to suspend or terminate a
                      Seller’s account where, in its absolute discretion, it
                      suspects or deems or in Eko Hub's opinion the Seller has
                      breached these Terms and Conditions or deems such
                      suspension or termination is otherwise appropriate. In the
                      event of such suspension or termination, Eko hub will
                      notify the Seller by email and the Seller must not seek to
                      re-register on the Website either directly or indirectly
                      or through a related entity or another person. Eko Hub's
                      rights under this paragraph shall not prejudice any other
                      right or remedy ekohub may have in respect of any breach,
                      or any rights, obligations or liabilities accrued prior to
                      such suspension or termination.
                    </p>
                  </li>
                  <li>
                    <p className="font-medium my-2">
                      3.9 Eko Hub may refuse to provide the Services to a Seller
                      if, in its sole discretion, Eko hub considers that the
                      Seller has not complied with any obligation in this clause
                      3.
                    </p>
                  </li>
                  <li>
                    <p className="my-2">
                      Initial Inspection and Collection of Devices
                    </p>
                    <p className="font-medium my-2">
                      3.10 If Eko Hub has accepted a Seller Offer, Ekohub will
                      collect the Device from the Seller at the address and time
                      agreed with the Seller. Eko Hub shall not be liable for
                      any failure to collect the Device at the agreed time or
                      for any delay whatsoever.
                    </p>
                  </li>
                  <li>
                    <p className="font-medium my-2">
                      3.11 Eko Hub will only collect Devices from addresses
                      located in Lagos, Nigeria.
                    </p>
                  </li>
                  <li>
                    <p className="font-medium my-2">
                      3.12 Prior to taking possession of a Device, Eko Hub will
                      carry out an initial inspection of the Device at the
                      Seller’s address, which will include taking photos of the
                      Device (“ Initial Inspection”).
                    </p>
                  </li>
                  <li>
                    <p className="font-medium my-2">
                      3.13 If, following the Initial Inspection, Eko Hub
                      considers, in its sole discretion, that a Device is,
                      without limitation, in breach of these Terms and
                      Conditions, does not conform with the description provided
                      in the Seller Offer, is not in a satisfactory condition or
                      is Unacceptable, Eko Hub may refuse to purchase the Device
                      and Eko Hub shall have no liability to the Seller in this
                      regard.
                    </p>
                  </li>
                  <li>
                    <p className="font-medium my-2">
                      3.14 If, following the Initial Inspection, Eko hub agrees
                      to purchase the Device, Eko hub will pay the agreed
                      purchase price to the Seller following which Eko hub shall
                      be the legal owner of the Device and the Seller shall have
                      no further ownership rights in respect of the Device.
                    </p>
                  </li>
                  <li>
                    <p className="my-2">Final Inspection of Devices</p>
                    <p className="font-medium my-2">
                      3.15 Upon receipt of a Device from a Seller, Eko hub will
                      carry out a further inspection of the Device to determine
                      whether it may be advertised for sale on the Website (“
                      Final Inspection”). Eko hub will only sell a Device which
                      has passed the Final Inspection.
                    </p>
                  </li>
                  <li>
                    <p className="my-2">Sim Card Removal and Data Deletion</p>
                    <p className="font-medium my-2">
                      3.16 It is a condition to the sale of a Device that, prior
                      to collection of the Device by Eko hub, you remove any SIM
                      cards, memory cards or other media devices inserted into
                      the Device and delete all personal details and data
                      including, without limitation, all names, mobile
                      phone/device numbers, SMS messages, applications,
                      photographs, games, songs, video and all other data from
                      the Device.
                    </p>
                  </li>
                  <li>
                    <p className="font-medium my-2">
                      3.17 In addition to clause 3.16, Eko Hub will complete a
                      factory reset on all Devices to ensure all personal data
                      is deleted from Devices.
                    </p>
                  </li>
                  <li>
                    <p className="font-medium my-2">
                      3.18 Eko hub will not accept liability for any loss,
                      damage or costs which you incur if any SIM card, memory
                      card or other media device is sent with the Device or if
                      personal data remains on the Device including, without
                      limitation, any charges which you incur as a result of use
                      of your Device by any person, whether incurred before or
                      after our receipt of the Device. We will not be in any way
                      responsible for the security, confidentiality, protection,
                      use or disclosure of any personal data that you fail to
                      delete or any losses or costs that arise as a result and
                      shall not be deemed to be holding, processing or otherwise
                      using the data on your behalf in any way.
                    </p>
                  </li>
                </ul>
              </article>
              <article className="my-4">
                <p className="font-bold my-2">4. BUYER TERMS</p>
                <p>Buyer Requirements</p>
                <ul>
                  <li>
                    <p className="font-medium my-2">4.1 All Buyers must:</p>
                    <p className="ml-2 my-2">
                      (a) be at least eighteen (18) years of age, in the case of
                      an individual;
                    </p>
                    <p className="ml-2 my-2">
                      (b) be legally capable of entering into a contract with
                      Eko hub
                    </p>
                    <p className="ml-2 my-2">
                      (c) not have any criminal record and be compliant with all
                      Applicable Laws;
                    </p>
                    <p className="ml-2 my-2">
                      (d) be resident in Lagos, Nigeria; and
                    </p>
                    <p className="ml-2 my-2">
                      (e) have valid identification or incorporation documents
                      as requested by Eko hub in the case of an individual or
                      legal entity, respectively.
                    </p>
                  </li>
                  <li>
                    <p className="font-medium my-2">
                      4.2 Each Buyer warrants and represents that:
                    </p>
                    <p className="ml-2 my-2">
                      (a) they are legally authorised to purchase the Device;
                      and
                    </p>
                    <p className="ml-2 my-2">
                      (b) their use of the Website and purchase of the Device is
                      not in breach of any Applicable Law including, without
                      limitation, anti-money laundering laws or any agreement or
                      contract to which the Buyer is a party.
                    </p>
                  </li>
                  <li>
                    <p className="my-2">Devices</p>
                    <p className="font-medium my-2">
                      4.3 Eko hub does not guarantee that the Final Inspection
                      will identify all defects in the Device.
                    </p>
                  </li>

                  <li>
                    <p className="font-medium my-2">
                      4.4 Eko hub does not give any representation or warranty
                      as to the description, specification, quality, price of or
                      the accuracy of any information related to any Device
                      listed for sale on the Website.
                    </p>
                  </li>
                  <li>
                    <p className="my-2">Offer and Price</p>
                    <p className="font-medium my-2">
                      4.5 The Buyer shall have the option to purchase the Device
                      at the List Price or make an offer for the Device at below
                      the List Price.
                    </p>
                  </li>
                  <li>
                    <p className="font-medium my-2">
                      4.6 Eko hub shall have no obligation whatsoever to accept
                      an offer from the Buyer and may, in its sole discretion,
                      reject an offer for a Device.
                    </p>
                  </li>
                  <li>
                    <p className="my-2">Payment</p>
                    <p className="font-medium my-2">
                      4.7 If Eko hub accepts an offer from a Buyer to purchase a
                      Device, Eko hub shall send a payment link to the Buyer to
                      purchase the Device. Eko hub acceptance of an offer does
                      not guarantee that the Device will be sold to the Buyer.
                    </p>
                  </li>
                  <li>
                    <p className="font-medium my-2">
                      4.8 The Buyer acknowledges and agrees that it will only be
                      entitled to receive the Device once it has made payment
                      for the Device and such payment has been received by Eko
                      hub and that the Device may be sold to a third party if
                      Eko hub receives payment for the Device from such third
                      party before the Buyer. An advertisement in respect of a
                      Device will only be removed from the Website after a Buyer
                      has paid for the relevant Device and such payment has been
                      received by Eko hub
                    </p>
                  </li>
                  <li>
                    <p className="font-medium my-2">
                      4.9 The Buyer shall pay for a Device using any one of the
                      payment methods specified by Eko hub from time to time.
                    </p>
                  </li>
                  <li>
                    <p className="my-2">Delivery</p>
                    <p className="font-medium my-2">
                      4.10 As soon as reasonably practicable following receipt
                      of payment from the Buyer, Eko hub shall deliver the
                      Device to the Buyer at a time and address agreed with the
                      Buyer. Eko hub may reschedule the time and date of
                      delivery and shall have no liability in respect thereof.
                      Eko hub shall have no liability for any delay in
                      delivering the Device to the Buyer.
                    </p>
                  </li>
                  <li>
                    <p className="font-medium my-2">
                      4.11 Eko hub will only deliver Devices to addresses
                      located in Lagos, Nigeria.
                    </p>
                  </li>
                  <li>
                    <p className="font-medium my-2">
                      4.12 All deliveries shall be subject to a delivery fee as
                      determined by Eko hub from time to time, which shall be
                      exclusive of VAT.{' '}
                    </p>
                  </li>
                </ul>
              </article>
              <article className="my-4">
                <p className="font-bold my-2">5. WARRANTY</p>
                <ul>
                  <li>
                    <p className="font-medium my-2">
                      5.1 Eko hub provides a 3-month warranty on Devices that
                      are faulty or defective starting from the date of receipt
                      of the Device by the Buyer. A Device will not be confirmed
                      as eligible for repair or replacement under this warranty
                      until it has been confirmed to the Buyer by Eko hub that
                      the Device is accepted for return.
                    </p>
                  </li>
                  <li>
                    <p className="font-medium my-2">
                      5.2 The Eko hub warranty will only apply to parts that
                      have been replaced by Eko hub, All such parts will be
                      listed in the documentation provided to the Buyer upon
                      purchase. The Buyer must also provide the original
                      purchase invoice and documentation to Eko hub in order to
                      make a warranty claim.
                    </p>
                  </li>
                  <li>
                    <p className="font-medium my-2">
                      5.3 The Eko hub warranty will not apply in the following
                      circumstances:
                    </p>
                    <p className="ml-2 my-2">
                      (a) the Device has been tampered with or disassembled in
                      any way;
                    </p>
                    <p className="ml-2 my-2">
                      (b) the Eko hub warranty seal on the Device is broken or
                      tampered with;
                    </p>
                    <p className="ml-2 my-2">
                      (c) the Device is water damaged;
                    </p>
                    <p className="ml-2 my-2">
                      (d) the Device is physically damaged or dropped
                      (accidental or otherwise);
                    </p>
                    <p className="ml-2 my-2">
                      (e) the screen on the Device is damaged as a result of
                      mishandling/misuse;{' '}
                    </p>
                    <p className="ml-2 my-2">
                      (f) repairs are attempted on the Device by any party other
                      than an authorised Eko hub employee;
                    </p>
                    <p className="ml-2 my-2">
                      (g) the original software is altered or modified (e.g.
                      “root” for Android devices or “jailbreak” for Apple
                      devices);
                    </p>
                    <p className="ml-2 my-2">
                      (h) the warranty does not extend to cover the accessories
                      to the Device such as the charger, cable or earphones;
                    </p>
                    <p className="ml-2 my-2">
                      (i) any person other than the initial Buyer of the Device
                      is making the warranty claim (the warranty is not
                      transferrable);
                    </p>
                    <p className="ml-2 my-2">
                      (j) a Buyer has already successfully made a warranty claim
                      and had their Device repaired or replaced; and
                    </p>
                    <p className="ml-2 my-2">
                      (k) such other circumstances where Ekohub, in its
                      reasonable opinion, believes a Buyer is acting in a
                      fraudulent or deceptive manner in order to make financial
                      gains.
                    </p>
                  </li>
                  <li>
                    <p className="font-medium my-2">
                      5.4 In order to make a warranty claim, please contact
                      contact@ekohub.info and provide the details of the
                      warranty claim, including videos and pictures of the
                      defect in the Device if possible.
                    </p>
                  </li>
                </ul>
              </article>
              <article className="my-4">
                <p className="font-bold my-2">6. LIMITATON OF LIABILITY</p>
                <ul>
                  <li>
                    <p className="font-medium my-2">
                      In no event shall Ekohub's liability under these Terms and
                      Conditions, regardless of the cause of action and losses
                      suffered by a User, exceed 500,000. Naira
                    </p>
                  </li>
                </ul>
              </article>
              <article className="my-4">
                <p className="font-bold my-2">7. VAT</p>
                <ul>
                  <li>
                    <p className="font-medium my-2">
                      Eko hub reserves the right to charge VAT (as may be
                      stipulated under Nigeria law), including without
                      limitation, with respect to any fees payable by Users from
                      time to time in relation to the Services.
                    </p>
                  </li>
                </ul>
              </article>
            </div>
          </div>
        </MainLayout>
      </Desktop>
      <Mobile>
        <MobileLayout tab={false}>
          <div className="py-8">
            {/* <Link
              to={paths.HOME}
              className="cursor-pointer m-4 px-4 py-2 bg-white rounded-full drop-shadow-lg text-xl"
            >
              {'<'}
            </Link> */}
            <p className="text-center font-bold text-xl">Privacy Policy</p>
            <div className="my-8 mx-4">
              <p className="font-bold my-2">WELCOME TO EKO HUB.</p>
              <p className="font-bold my-2">
                PLEASE READ THIS IMPORTANT LEGAL INFORMATION THAT GOVERNS YOUR
                USE OF THE EKOHUB.NG WEBSITE AND THE SERVICES.
              </p>
              <p className="font-bold my-2">23 March 2022</p>
              <p className="my-4">
                By using http://www.ekohub.ng or the Ekohub mobile application
                of the online platform (collectively, the “ Website ”), you
                confirm that you have read, understood, and accept these terms
                of use (“Terms ”) as the terms which govern your access to and
                use of the Website and the Service and you agree to comply with
                them. If you do not accept or agree to comply with these Terms,
                you must not use this Website. Additionally, when using a
                portion of the Service, you agree to conform to any applicable
                posted guidelines for such Service, which may change or be
                updated from time to time at our sole discretion.
              </p>
              <p className="my-4">
                These Terms are made between Eko Hub (“we” “us” “ our ”, the
                “Company”, as applicable) and you (“you ” or the “ User ”). The
                Company is part of the operation for various services other than
                the Service, such as car inspections, car evaluations, and
                photography services. Nigeria mainland services such as car
                inspections, evaluations and car brokering services are also
                carried out by Ekohub Motors LLC.
              </p>
              <p className="my-4">
                If you are a company advertising on our Website, you will be
                required to enter into additional terms and conditions set out
                in our Advertising Agreement, however, please note that these
                Terms will still apply and must be read in conjunction with any
                other agreement you enter into with the Company.
              </p>

              <article className="my-4">
                <p className="font-bold my-2">1.1 DEFINITIONS</p>
                <p className="my-2">
                  The following capitalised terms shall have the following
                  meaning, except where the context otherwise requires:
                </p>
                <ul>
                  <li>
                    <p className="my-2">
                      “Advertising Agreement ” – an agreement for the provision
                      of advertising services or products entered into between
                      the Company and the Client.
                    </p>
                  </li>
                  <li>
                    <p className="my-2">
                      “Ad Services Package ” – the bundle of advertising product
                      or service which the Company agrees to provide to the
                      Customer, as set out in the relevant order form provided
                      by the Company and signed by the Client to order the Ad
                      Services Package pursuant to these Terms and the terms of
                      the Advertising Agreement.
                    </p>
                  </li>
                  <li>
                    <p className="my-2">
                      “Client” – the client entity that is party to the
                      Advertising Agreement.
                    </p>
                  </li>
                  <li>
                    <p className="my-2">
                      “Customer” – any customer of the Client.
                    </p>
                  </li>
                  <li>
                    <p className="my-2">
                      “Effective Date” – the date set out at the top of these
                      Terms.
                    </p>
                  </li>
                  <li>
                    <p className="my-2">
                      “Intellectual Property Rights ” – all intellectual
                      property, including patents, trademarks, rights in
                      goodwill, database rights and rights in data, rights in
                      designs, copyrights and topography rights (whether or not
                      any of these rights are registered, and including
                      applications and the right to apply for registration of
                      any such rights) and all inventions, rights in know-how,
                      trade secrets and confidential information, customer and
                      supplier lists and other proprietary knowledge and
                      information and all rights under licences and consents in
                      relation to any such rights and all rights and forms of
                      protection of a similar nature or having equivalent or
                      similar effect to any of these which may subsist anywhere
                      in the world for their full term, including any renewals
                      and extensions.
                    </p>
                  </li>
                  <li>
                    <p className="my-2">
                      “Material” – material and content published on the Website
                      or otherwise provided by the Company in connection with
                      the Service.
                    </p>
                  </li>
                  <li>
                    <p className="my-2">
                      “Privacy Policy” – the privacy policy of the Company from
                      time to time.
                    </p>
                  </li>
                  <li>
                    <p className="my-2">
                      “Product” – an online classifieds advertising platform
                      provided on the Website and the Ad Services Package.
                    </p>
                  </li>
                  <li>
                    <p className="my-2">
                      “Posting Agents” – a third-party agent, service or
                      intermediary that offers to post Material to the Service
                      on behalf of others.
                    </p>
                  </li>
                  <li>
                    <p className="my-2">
                      “Registration Details ” – the details a User must provide
                      upon registering for the Website from time to time (for
                      example: name, phone numbers, email address, age and/or
                      address).
                    </p>
                  </li>
                  <li>
                    <p className="my-2">
                      “Service” – the provision of the Website and the Product.
                    </p>
                  </li>
                  <li>
                    <p className="my-2">
                      “Unacceptable ” – any material or information uploaded to
                      or made available on the Website which under the law of
                      any jurisdiction from which the Website may be accessed
                      may be considered:
                    </p>
                    <p className="my-4 ml-4">
                      illegal, illicit, indecent, obscene, racist, offensive,
                      pornographic, paedophilic, insulting, false, unreliable,
                      misleading, harmful or potentially harmful to minors,
                      threatening, libellous, alleged to be or actually
                      defamatory or in infringement of third-party rights (of
                      whatever nature and including, without limitation, any
                      Intellectual Property Rights), invasive of another’s
                      privacy or other rights, to relate to or encourage money
                      laundering or illegal gambling;
                    </p>
                    <p className="my-4 ml-4">
                      in breach of any applicable regulations, standards or
                      codes of practice (notwithstanding that compliance may not
                      be compulsory);
                    </p>
                    <p className="my-4 ml-4">
                      in contravention of legislation, including without
                      limitation, that relating to weapons, animals or alcohol;
                      or
                      <br />
                      harmful to the Company’s reputation.
                    </p>
                  </li>
                  <li>
                    <p className="my-2">
                      “User Material ” – material and content posted on the
                      Website by a User or otherwise provided by a User in
                      connection with the Website or the Service.
                    </p>
                  </li>
                </ul>
              </article>
              <article className="my-4">
                <p className="font-bold my-2">
                  GENERAL TERMS AND CONDITIONS WHICH APPLY TO USERS
                </p>
                <ul>
                  <li>
                    <p className="font-medium my-2">
                      2.1 In registering for this Website, the User must provide
                      true, accurate, current and complete Registration Details
                      which the User must update after any changes (except age)
                      before using the Website for further services in the
                      future.
                    </p>
                  </li>
                  <li>
                    <p className="font-medium my-2">
                      2.2 The User hereby agrees and acknowledges that the
                      Website may contain adverts placed by advertisers or
                      companies in the course of business for goods or services
                      (and which the Company takes no responsibility for).
                      Advertisers or companies using the Website or the Service
                      to place adverts offering goods or services of a business,
                      commercial or trade nature must include their full names
                      in the advert and make it clear that they are selling
                      goods or services in the course of business either by the
                      content, format, size or place of the advertisement or by
                      including words such as “trade”, “dealer”, “agent”,
                      “wholesale” or similar in the name of the advert they
                      submit for publication.
                    </p>
                  </li>
                  <li>
                    <p className="font-medium my-2">
                      2.3 The User hereby warrants and represents to the Company
                      that it is at least eighteen years of age and legally able
                      to enter into contracts.
                    </p>
                  </li>
                  <li>
                    <p className="font-medium my-2">
                      2.4 The Company reserves the discretion to withdraw any
                      Material or User Material from the Website without prior
                      notice and to refuse any User Material posted or provided
                      to the Company by a User.
                    </p>
                  </li>
                  <li>
                    <p className="font-medium my-2">
                      2.5 The User’s Registration Details and data relating to
                      its use of the Website will be recorded by the Company,
                      but this information shall not be disclosed to third
                      parties (otherwise than on an aggregated, anonymous basis,
                      or in accordance with the Privacy Policy or in accordance
                      with Clause 2.6 below) nor used for any purpose unrelated
                      to the Website. By agreeing to the terms, you expressly
                      give us permission to verify the authenticity of your
                      details by calling you on the phone number submitted to
                      us. The call may be recorded for quality assurance.
                    </p>
                  </li>
                  <li>
                    <p className="font-medium my-2">
                      2.6 The User hereby authorises the Company to use any
                      information which it submits to the Website to inform the
                      User of special offers, occasional third party offers and
                      for other marketing and related purposes. Without
                      prejudice to Clause 2.5 above, the Company will not use
                      User data for any other purposes than as set out in these
                      Terms except that the Company may disclose this data if
                      compelled to do so by law, or at the request of a law
                      enforcement agency or governmental authority.
                    </p>
                  </li>
                  <li>
                    <p className="font-medium my-2">
                      2.7 If the User does not wish the Company to use its
                      information as set out in Clause 2.6 above, it should
                      leave the Website before submitting its personal details.
                    </p>
                  </li>
                  <li>
                    <p className="font-medium my-2">
                      2.8 If the User does not want the Company to use its email
                      address or SMS/mobile number to send information
                      concerning the Website and related matters, the User
                      should send an email message to contact@ekohub.info insert
                      unsubscribe as the subject heading of such message.
                    </p>
                  </li>
                  <li>
                    <p className="font-medium my-2">
                      2.9 You must keep confidential any user identification and
                      password details set-up or given to you as part of our
                      security procedures and must not disclose them to any
                      third party.
                    </p>
                  </li>
                  <li>
                    <p className="font-medium my-2">
                      2.10 The Company reserves the right to suspend or
                      terminate a User’s account where, in its absolute
                      discretion, it deems the User has breached these terms or
                      deems such suspension or termination is otherwise
                      appropriate. In the event of such suspension or
                      termination, the Company will notify the User by email and
                      the User must not seek to re-register on any Website
                      either directly or indirectly through a related entity.
                      The Company’s rights under this Clause 2.10 shall not
                      prejudice any other right or remedy the Company may have
                      in respect of any breach, or any rights, obligations or
                      liabilities accrued prior to such suspension or
                      termination.
                    </p>
                  </li>
                  <li>
                    <p className="font-medium my-2">
                      2.11 For the avoidance of doubt, the Company is providing
                      a service not goods.
                    </p>
                  </li>
                  <li>
                    <p className="font-medium my-2">
                      2.12 The Eko Hub owns all Intellectual Property Rights in
                      and associated with the Website and the Service, including
                      without limitation, any trademarks, trade names, designs,
                      text, graphics and the selection and arrangement thereof.
                      Nothing contained in the Website should be construed as
                      granting by implication or otherwise, any license or right
                      to use any trademark displayed on the Website without our
                      written permission. You may print off one copy, and may
                      download extracts, of any page(s) from the Website for
                      your personal use and you may draw the attention of others
                      to content posted on the Website, but you must not modify
                      the digital or paper copies of any materials you have
                      printed off or downloaded in any way, and you must not use
                      any photographs or videos separately from any accompanying
                      text. You agree not to circumvent, disable, or otherwise
                      interfere with security related features of the Website or
                      features that prevent or restrict use or copying of any
                      Materials or enforce limitations on use of the Website or
                      the Materials therein. Material displayed on or through
                      the Service is protected by copyright as a collective work
                      and/or compilation, pursuant to copyrights laws, other
                      laws, and international conventions. Any reproduction,
                      modification, creation of derivative works from or
                      redistribution of the Website, the Materials, or the
                      collective work or compilation is expressly prohibited.
                      Copying or reproducing the Website, the Materials, or any
                      portion thereof for further reproduction or redistribution
                      is expressly prohibited.
                    </p>
                  </li>
                  <li>
                    <p className="font-medium my-2">
                      2.13 The Company takes reported and actual infringement of
                      Intellectual Property Rights and fraud extremely seriously
                      and whilst Users cannot hold the Company liable in
                      relation to such issues, the Company requests all Users to
                      report such matters immediately to the Company, and the
                      Company inform the appropriate authorities.
                    </p>
                  </li>
                  <li>
                    <p className="font-medium my-2">
                      2.14 If you are an owner of Intellectual Property Rights
                      or an agent who is fully authorised to act on behalf of
                      the owner of Intellectual Property Rights and believe that
                      any Material or other content infringes upon your
                      Intellectual Property Right or the Intellectual Property
                      Rights of the owner on whose behalf you are authorised to
                      act, you may submit a notification to the Company together
                      with a request to the Company to delete the relevant
                      Material in good faith. The notification and the request
                      must contain the following information:
                    </p>
                    <p className="ml-4 my-2">
                      2.14.1 a physical or electronic signature of a person
                      authorised to act on behalf of the owner of an exclusive
                      right that is allegedly infringed;
                    </p>
                    <p className="ml-4 my-2">
                      2.14.2 identification of the Intellectual Property Rights
                      claimed to have been infringed, or, if multiple
                      Intellectual Property Rights can be covered by a single
                      notification, a representative list of such works;
                    </p>
                    <p className="ml-4 my-2">
                      2.14.3 identification of the Material (by means of data or
                      communication link, etc.) that is claimed to be infringing
                      or to be the subject of infringing activity and that is to
                      be removed or access to which is to be disabled and
                      information reasonably sufficient to permit the Company to
                      locate the Material;
                    </p>
                    <p className="ml-4 my-2">
                      2.14.4 information reasonably sufficient to permit the
                      Company to contact you, such as an address, telephone
                      number, and an electronic mail address;
                    </p>
                    <p className="ml-4 my-2">
                      2.14.5 a signed statement that you have a good faith
                      belief that use of the Material in the manner complained
                      of is not authorised by the Intellectual Property Rights
                      owner, its agent, or the law;
                    </p>
                    <p className="ml-4 my-2">
                      2.14.6 a signed statement that the Intellectual Property
                      Rights owner holds the Company harmless from any claim of
                      any third party in connection with the Company removing
                      the relevant content; and
                    </p>
                    <p className="ml-4 my-2">
                      2.14.7 a signed statement that the information in the
                      notification is accurate and under penalty of perjury that
                      you are authorised to act on behalf of the owner of an
                      exclusive right that is allegedly infringed.
                    </p>
                  </li>
                  <li>
                    <p className="font-medium my-2">
                      2.15 All notifications under Clauses 2.13 and 2.14 must be
                      sent to{' '}
                      <strong className="text-red-400">
                        contact@ekohub.info
                      </strong>
                    </p>
                  </li>
                  <li>
                    <p className="font-medium my-2">
                      2.16 Users will be invited to send comments to the Company
                      email relating to the integrity and performance of other
                      Users.
                    </p>
                  </li>
                  <li>
                    <p className="font-medium my-2">
                      2.17 The following restrictions shall apply to all Users.
                      You must:
                    </p>
                    <p className="ml-4 my-2">
                      2.17.1 not use the Website or the Service in any unlawful
                      manner, for any unlawful purpose, or in any manner
                      inconsistent with these Terms, or act fraudulently or
                      maliciously, for example, by hacking into or inserting
                      malicious code, such as viruses, or harmful data, into the
                      Website or any Service or any operating system;
                    </p>
                    <p className="ml-4 my-2">
                      2.17.2 not transmit any material designed to interrupt,
                      damage, destroy or limit the functionality of the Website
                      or the Service;
                    </p>
                    <p className="ml-4 my-2">
                      2.17.3 use any form of automated device or computer
                      program (sometimes referred to as “flagging tools”) that
                      enables the use of the Company’s “flagging system” or
                      other community control systems without each flag being
                      manually entered by a human that initiates the flag (an
                      “automated flagging device”), or use any such flagging
                      tool to remove posts of competitors, other third parties
                      or to remove posts without a reasonable good faith belief
                      that the post being flagged violates these terms or any
                      applicable law or regulation;
                    </p>
                    <p className="ml-4 my-2">
                      2.17.4 not use any automated software to view the Service
                      without our consent (including use of spiders, robots,
                      crawlers, data mining tools, or the like to download or
                      scrape data from the Service, except for internet search
                      engines (e.g., Google) and non-commercial public archives
                      (e.g., archive.org) and only access the Service manually;
                    </p>
                    <p className="ml-4 my-2">
                      2.17.5 not use the Service other than for your own
                      personal use or as an agent listing property for sale and
                      to rent;
                    </p>
                    <p className="ml-4 my-2">
                      2.17.6 not attempt to copy any Material or reverse
                      engineer any processes without the Company’s consent;
                    </p>
                    <p className="ml-4 my-2">
                      2.17.7 not use any Service in any manner that is illegal,
                      immoral or harmful to the Eko Hub;
                    </p>
                    <p className="ml-4 my-2">
                      2.17.8 not use any Service in breach of any policy or
                      other notice on the Website;
                    </p>
                    <p className="ml-4 my-2">
                      2.17.9 not remove or alter any copyright notices that
                      appear on the Website;
                    </p>
                    <p className="ml-4 my-2">
                      2.17.10 not publish any User Material which is or may be
                      Unacceptable or that may encourage a breach of any
                      relevant laws or regulations;
                    </p>
                    <p className="ml-4 my-2">
                      2.17.11 not interfere with any other User’s enjoyment of
                      the Website or the Service;
                    </p>
                    <p className="ml-4 my-2">
                      2.17.12 not conduct yourself in an offensive or abusive
                      manner whilst using the Website or the Service;
                    </p>
                    <p className="ml-4 my-2">
                      2.17.13 not contact anyone who has asked not to be
                      contacted, or make unsolicited contact with anyone for any
                      commercial purpose, specifically, contact any User to post
                      advertisement on a third party website or post any
                      advertisement on behalf of such User;
                    </p>
                    <p className="ml-4 my-2">
                      2.17.14 “stalk” or otherwise harass anyone;
                    </p>
                    <p className="ml-4 my-2">
                      2.17.15 not collect personal data about other Users or
                      entities for commercial or unlawful purposes;
                    </p>
                    <p className="ml-4 my-2">
                      2.17.16 not transmit any User Material that:
                    </p>
                    <p className="my-4 ml-4">
                      harasses, degrades, intimidates or is hateful towards any
                      individual or group of individuals on the basis of
                      religion, gender, sexual orientation, race, ethnicity, age
                      or disability;
                    </p>
                    <p className="my-4 ml-4">
                      includes personal or identifying information about another
                      person without that person's explicit consent;
                    </p>
                    <p className="my-4 ml-4">
                      impersonates any person or entity, including, but not
                      limited to, a Company employee, or falsely states or
                      otherwise misrepresents an affiliation with a person or
                      entity;
                    </p>
                    <p className="ml-4 my-2">
                      {' '}
                      is protected by copyright or patent, protected by trade
                      secret or trademark, or otherwise subject to third party
                      proprietary rights, including privacy and publicity
                      rights, unless you are the owner of such rights or have
                      permission or a license from their rightful owner to post
                      the material and to grant the Company all of the license
                      rights granted herein;
                    </p>
                    <p className="ml-4 my-2">
                      infringes any of the foregoing Intellectual Property
                      Rights of any party, or is User Material that you do not
                      have a right to make available under any law, regulation,
                      contractual or fiduciary relationship(s);
                    </p>
                    <p className="ml-4 my-2">
                      constitutes or contains “pyramid schemes”, “jokes”,
                      “affiliate marketing,” “link referral code,” “junk mail,”
                      “spam,” “chain letters,” “bait marketing”, “negative
                      option marketing”, “referral selling” or unsolicited
                      advertisements of a commercial nature;
                    </p>
                    <p className="ml-4 my-2">
                      constitutes or contains any form of advertising or
                      solicitation if: (i) posted in areas or categories of the
                      Website which are not designated for such purposes; or
                      (ii) e-mailed to the Company Users who have requested not
                      to be contacted about other services, products or
                      commercial interests; and
                    </p>
                    <p className="ml-4 my-2">
                      includes links to commercial services or third-party
                      websites, except as specifically allowed by the Company.
                    </p>
                  </li>
                  <li>
                    <p className="font-medium my-2">
                      2.18 By submitting User Material on the Website or
                      otherwise, the User grants the ekohub a royalty-free,
                      perpetual, irrevocable and non-exclusive right and license
                      to use, reproduce, distribute, display, modify and edit
                      the User Material. EkoHub will not pay the User any fees
                      whatsoever for the User Material and reserves the right in
                      its sole discretion to remove or edit the User Material at
                      any time. The User warrants and represents that it has all
                      rights, consents and/or authorisations in respect of the
                      User Material necessary to grant the EkoHub these rights.
                    </p>
                  </li>
                  <li>
                    <p className="font-medium my-2">
                      2.19 The Company permits the User to post User Material on
                      the Website in accordance with the Company’s procedures
                      provided that User Material is not illegal, misleading,
                      obscene, abusive, threatening, defamatory or otherwise
                      objectionable to the Company. You must not post any
                      Unacceptable material and, in respect of any User Material
                      you post, you warrant that it is not Unacceptable.
                    </p>
                  </li>
                  <li>
                    <p className="font-medium my-2">
                      2.20 The Company grants you a limited, revocable,
                      non-exclusive license to access and use the Service for
                      personal use. This license granted herein does not include
                      any of the following: (a) access to or use of the Service
                      by Posting Agents; or (b) any collection, aggregation,
                      copying, duplication, display or derivative use of the
                      Service nor any use of data mining, robots, spiders, or
                      similar data gathering and extraction tools for any
                      purpose unless expressly permitted by the Company or as
                      otherwise set forth in these Terms. Notwithstanding the
                      foregoing, general purpose internet search engines and
                      non-commercial public archives that gather information for
                      the sole purpose of displaying hyperlinks to the Service,
                      provided they each do so from a stable IP address or range
                      of IP addresses using an easily identifiable agent and
                      comply with our robots.txt file, may engage in the
                      activities set forth in (b). For purposes of this
                      exception, a “general purpose internet search engine” does
                      not include a website or search engine or other service
                      that specialises in classified listings including any
                      subset of classifieds listings such as housing, for sale,
                      jobs, services, or personals, or which otherwise provides
                      classified ad listing services. The license set forth in
                      this Clause 2.20 permits you to display on your website,
                      or create a hyperlink thereto, individual postings on the
                      Service so long as such use is for non-commercial and/or
                      news reporting purposes only (e.g., for use in personal
                      blogs or other personal online media). The Company may
                      limit the amount of postings displayed on or linked to
                      your website. Use of the Service beyond the scope of
                      authorised access as set forth in these Terms immediately
                      terminates any permission or license granted herein. In
                      order to collect, aggregate, copy, duplicate, display or
                      make derivative use of the Service or any Material made
                      available via the Service for other purposes (including
                      commercial purposes) not stated herein, you must first
                      obtain a license from the Company.
                    </p>
                  </li>
                  <li>
                    <p className="font-medium my-2">
                      2.21 The Company offers a service known as “Featured Ads”
                      where users may pay a non-refundable fee to have their ads
                      posted in selected locations on the Website, thus
                      potentially increasing an ads' visibility. In order to
                      purchase a Featured Ad, you may be required to transmit
                      certain information through a third-party service
                      provider, Click & Buy, a third-party website, that may be
                      governed by its own terms of use and other policies. The
                      Company makes no representation or guarantee as to the
                      safety or security of the information transmitted to any
                      third-party website, and your linking to any third party
                      website is completely at your own risk, and the Company
                      disclaims all liability related thereto.
                    </p>
                  </li>
                  <li>
                    <p className="font-medium my-2">
                      2.22 The Company may employ a third-party provider for
                      processing credit card payments for users that use the
                      Product(s) or services provided. Such third-party provider
                      may have access to personal information provided by users
                      needed in order to perform their functions but may not use
                      it for any other purpose. The Company does not have access
                      to or retain any user’s payment information.
                    </p>
                  </li>
                </ul>
              </article>
              <article className="my-4">
                <p className="font-bold my-2">3. PAID POSTINGS </p>
                <ul>
                  <li>
                    <p className="font-medium my-2">
                      3.1 The Company may charge a fee to post Material in some
                      specific areas of the Service (“Paid Material ”). The fee
                      permits Paid Material to be posted in a designated area of
                      the Website. Each party posting Paid Material to the
                      Service is responsible for the Material and compliance
                      with these terms. Any such fees paid hereunder are
                      non-refundable in the event any Material is removed from
                      the Service for violating these terms. Additional terms
                      regarding Paid Material will be fully stated in the
                      applicable section(s).
                    </p>
                  </li>
                  <li>
                    <p className="font-medium my-2">
                      3.2 All job ads that announce several positions in one ad
                      will be deleted after 24 hours of their posting and no
                      refund will be given. Within the first 24 hours of the
                      posting, the user can edit the multiple-position ad to
                      reduce it to one position. If the ad does not get edited
                      to fulfil the Company’s requirements, the ad will be
                      deleted, and no refund given.
                    </p>
                  </li>
                </ul>
              </article>
              <article className="my-4">
                <p className="font-bold my-2">4. POSTING AGENTS </p>
                <ul>
                  <li>
                    <p className="font-medium my-2">
                      4.1 The Company prohibits the use of Posting Agents,
                      directly or indirectly, without the express written
                      permission of the Company. In addition, Posting Agents are
                      not permitted to post Material on behalf of others,
                      directly or indirectly, or otherwise access the Service in
                      order to post Material on behalf of others, except with
                      express written permission or license from the Company.
                    </p>
                  </li>
                </ul>
              </article>
              <article className="my-4">
                <p className="font-bold my-2">5. NO SPAM POLICY</p>
                <ul>
                  <li>
                    <p className="font-medium my-2">
                      5.1 You understand and agree that sending unsolicited
                      email advertisements or other unsolicited communications
                      to the Company addresses or through the Company computer
                      systems are expressly prohibited by these Terms. You
                      acknowledge and agree that from time to time the Company
                      may monitor email usage using human monitors or automated
                      software to flag certain words associated with spam or
                      scams in emails that are sent between one User to another
                      in the Company’s e-mail system. Any communication between
                      yourself and any other User utilising the communication
                      features available on the Service and the Website may be
                      used only in accordance with these Terms.
                    </p>
                  </li>
                  <li>
                    <p className="font-medium my-2">
                      5.2 Any unauthorised use of the Company computer systems
                      is a violation of these Terms and certain applicable laws,
                      in particular the Nigeria Cybercrimes legislation. Such
                      violations may subject the sender and his or her agents to
                      civil and criminal penalties. Please note that the Nigeria
                      Cybercrimes legislation carries significant penalties
                      including imprisonment. In case you intend to solicit or
                      contact our Users by obtaining their email or phone
                      numbers from our Website, we may report this behaviour to
                      the relevant authorities, who then may decide to prosecute
                      you under the relevant Nigeria laws.
                    </p>
                  </li>
                  <li>
                    <p className="font-medium my-2"></p>
                  </li>
                </ul>
              </article>
              <article className="my-4">
                <p className="font-bold my-2">6. LIMITATION OF LIABILITY</p>
                <ul>
                  <li>
                    <p className="font-medium my-2">
                      6.1 The Company shall not be liable for any:
                    </p>
                    <p className="my-4 ml-4">
                      6.1.1 consequential, indirect, special losses or exemplary
                      damages (even if the Company has been advised of the
                      possibility of such losses or damages);
                    </p>
                    <p className="my-4 ml-4">6.1.2 loss of profit;</p>
                    <p className="my-4 ml-4">6.1.3 loss of business;</p>
                    <p className="my-4 ml-4">6.1.4 loss of revenue;</p>
                    <p className="my-4 ml-4">
                      6.1.5 loss of or corruption to data;
                    </p>
                    <p className="my-4 ml-4">6.1.6 loss of use;</p>
                    <p className="my-4 ml-4">6.1.7 loss of production;</p>
                    <p className="my-4 ml-4">6.1.8 loss of contract;</p>
                    <p className="my-4 ml-4">6.1.9 loss of opportunity;</p>
                    <p className="my-4 ml-4">
                      6.1.10 loss of savings, discount or rebate (whether actual
                      or anticipated);
                    </p>
                    <p className="my-4 ml-4">
                      6.1.11 harm to reputation or loss of goodwill;
                    </p>
                    <p className="my-4 ml-4">
                      6.1.12 loss of anticipated savings,
                    </p>
                    <p className="my-4 ml-4">
                      (In the cases of Clauses ‎6.1.2 to 6.1.12 (inclusive),
                      whether direct or indirect), howsoever arising suffered by
                      any User arising in any way in connection with these Terms
                      or for any liability of a User to any third party.
                    </p>
                  </li>
                  <li>
                    <p className="font-medium my-2">
                      6.2 The limitations at Clause 6.1 shall also apply with
                      respect to damages incurred by reason of other services or
                      products received through or advertised in connection with
                      the Website or the Service or any links on the Website, as
                      well as by reason of any information, opinions or advice
                      received through or advertised in connection with the
                      Website or the Service or any links to the Website or
                      Service.
                    </p>
                  </li>
                  <li>
                    <p className="font-medium my-2">
                      6.3 The limitations in this Clause 6 shall apply to the
                      fullest extent permitted by law. You specifically
                      acknowledge and agree that the Company shall not be liable
                      for user submissions or the defamatory, offensive, or
                      illegal conduct of any user or third party and that the
                      risk of harm or damage from the foregoing rests entirely
                      with you.
                    </p>
                  </li>
                  <li>
                    <p className="font-medium my-2">
                      6.4 Whilst the Company will take all reasonable attempts
                      to exclude viruses from the Website, it cannot ensure such
                      exclusion and no liability is accepted for viruses. The
                      User is recommended to take all appropriate safeguards
                      before accessing or downloading information or any
                      Material from the Website.
                    </p>
                  </li>
                  <li>
                    <p className="font-medium my-2">
                      6.5 The Website includes information and materials
                      uploaded by other users of the Website. This information
                      and these materials have not been verified or approved by
                      the Company and the Company shall not be liable for any
                      material which may be deemed Unacceptable. You further may
                      be exposed to Material that is inaccurate, offensive,
                      indecent, objectionable, defamatory, or libellous and, as
                      far as the law allows, and subject to Clause 6.11, you
                      agree to waive, and hereby do waive, any legal or
                      equitable rights or remedies you have or may have against
                      the Company with respect thereto.
                    </p>
                  </li>
                  <li>
                    <p className="font-medium my-2">
                      6.6 The Company does not guarantee that the Website will
                      always be accessible, uninterrupted, timely, secure, error
                      free or free from computer virus or other invasive or
                      damaging code or that the Website will not be affected by
                      force majeure events, including inability to obtain or
                      shortage of necessary materials, equipment facilities,
                      power or telecommunications, lack of telecommunications
                      equipment or facilities and failure of information
                      technology or telecommunications equipment or facilities.
                      The Company may suspend or withdraw or restrict the
                      availability of all or any part of the Website for
                      business and operational reasons at any time and shall not
                      be liable for any interruption to the Service, whether
                      intentional or otherwise. We recommend that you back up
                      any content and data used in connection with the Website,
                      to protect yourself in case of problems with the Website
                      or the Service.
                    </p>
                  </li>
                  <li>
                    <p className="font-medium my-2">
                      6.7 The Company is not liable for any failure in respect
                      of its obligations hereunder which result directly or
                      indirectly from failure or interruption in software or
                      services provided by third parties.
                    </p>
                  </li>
                  <li>
                    <p className="font-medium my-2">
                      6.8 The Company is not responsible for the direct or
                      indirect consequences of a User linking to any other
                      website from the Website and has not approved such linked
                      websites or the material or information available from
                      them.
                    </p>
                  </li>
                  <li>
                    <p className="font-medium my-2">
                      6.9 The Company does not guarantee, represent or warrant
                      that the information accessible via the Website is
                      accurate, complete or current. The Company has no
                      liability whatsoever in respect of any use which the User
                      makes of such information. The Website, the Service, and
                      use of all related facilities are provided on an “as is,
                      as available” basis without any warranties whether express
                      or implied.
                    </p>
                  </li>
                  <li>
                    <p className="font-medium my-2">
                      6.10 The Website and the Service have not been developed
                      (and Material has not been written) to meet the individual
                      requirements of the User and it is the User’s sole
                      responsibility to satisfy itself prior to entering into
                      any transaction or decision that the Website, the Service
                      and the Material are suitable for its purposes. A User in
                      making any financial or other decision based on Material
                      or other information in the Website accepts that it does
                      so exclusively at its own risk and the Company shall have
                      no liability in respect of the same.
                    </p>
                  </li>
                  <li>
                    <p className="font-medium my-2">
                      6.11 None of the Clauses herein shall apply so as to
                      restrict liability for death or personal injury resulting
                      from the negligence of the Company or its appointed
                      agents.
                    </p>
                  </li>
                  <li>
                    <p className="font-medium my-2">
                      6.12 The Website is controlled and offered by the Company
                      from facilities in Dubai in the United Arab Emirates. The
                      Company makes no representations or warranties that the
                      Website is appropriate for use in other locations. Those
                      who access or use the Website from other jurisdictions do
                      so at their own volition and risk and are responsible for
                      compliance with local law.
                    </p>
                  </li>
                </ul>
              </article>
              <article className="my-4">
                <p className="font-bold my-2">7. JOBS WANTED</p>
                <ul>
                  <li>
                    <p className="font-medium my-2">
                      7.1 The Company is not responsible for the information
                      posted by the job seekers in the Jobs Wanted section or in
                      their CVs. The CV Search is a form of head hunting, it
                      allows recruiters to look through the CVs in our database.
                      However, some of the applicants may or may not match the
                      job position you are looking to fill. Any fees paid are
                      non-refundable once the package is used. The duration of
                      the CV Search cannot be extended.
                    </p>
                  </li>
                  <li>
                    <p className="font-medium my-2">
                      7.2 By placing a job seeking ad in the Jobs Wanted
                      section, the recruiter will have access to the CV uploaded
                      to the job seeker's profile. Once an applicant uploads
                      their CV to their profile, it will be added to our
                      database where recruiters will have access to it for 18
                      months.
                    </p>
                  </li>
                </ul>
              </article>
              <article className="my-4">
                <p className="font-bold my-2">8. INDEMNITY</p>
                <ul>
                  <li>
                    <p className="font-medium my-2">
                      8.1. The User agrees to defend, indemnify and hold
                      harmless the Company, the EKO HUB and each of their
                      officers, subsidiaries, affiliates, successors, assigns,
                      directors, officers, agents, service providers, suppliers
                      and employees, from and against any and all claims,
                      damages, obligations, losses (whether direct, indirect or
                      consequential), liabilities, costs or debt, and expenses
                      (including but not limited to attorneys’ fees) arising
                      from (a) your improper use of, or your inability to use,
                      the Website or the Service; (b) your breach of any
                      provision of these Terms; and/or (c) your violation of any
                      third party right, including without limitation any
                      copyright, trademark, trade secret or other property, or
                      privacy right. As far as the law allows, this defence and
                      indemnification obligation will survive termination,
                      modification or expiration of these Terms and your use of
                      the Website and the Service.
                    </p>
                  </li>
                </ul>
              </article>
              <article className="my-4">
                <p className="font-bold my-2">
                  9. PROPERTY FOR SALE AND PROPERTY FOR RENT CATEGORIES ON THE
                  WEBSITE
                </p>
                <p>
                  If you are listing a property on this Website, your
                  obligations are as follows:
                </p>
                <p className="font-bold my-2">Brokers</p>
                <ul>
                  <li>
                    <p className="font-medium my-2">
                      9.1. You warrant that you possess a valid license from the
                      Real Estate Regulatory Authority (RERA), or its equivalent
                      in Nigeria in which you are advertising.
                    </p>
                  </li>
                  <li>
                    <p className="font-medium my-2">
                      9.2. If a project is off plan (under construction), you
                      warrant that the project is registered with RERA.
                    </p>
                  </li>
                  <li>
                    <p className="font-medium my-2">
                      9.3. If you are engaging in subleasing activities, you
                      warrant that you possess a license for the activity of
                      “Leasing and Management of Other People’s Property” from
                      both Nigeria Department of Economic Development (DED and
                      RERA).
                    </p>
                  </li>
                  <li>
                    <p className="font-medium my-2">
                      9.4. If you are engaging in short-term or Holiday Home
                      leasing, you warrant that you possess a license for the
                      activity from Nigeria Housing Department.
                    </p>
                  </li>
                  <li>
                    <p className="font-medium my-2">
                      9.5. As per the housing regulations, you must obtain
                      approval for every sale or leasing advertisement (located
                      within or outside of Nigeria) and display the Housing
                      Permit Number, Office Registration Number and Broker
                      Registration Number on all advertisements.
                    </p>
                  </li>
                </ul>
                <p className="font-bold my-2">Developers</p>
                <ul>
                  <li>
                    <p className="font-medium my-2">
                      9.6. You warrant that you possess a valid license from EKO
                      HUB, or its equivalent in the Nigeria housing in which you
                      are advertising.
                    </p>
                  </li>
                  <li>
                    <p className="font-medium my-2">
                      9.7. If a project is off plan (under construction), you
                      warrant that it is registered with EKO HUB and hold a EKO
                      HUB approved Escrow Account for the project.
                    </p>
                  </li>
                  <li>
                    <p className="font-medium my-2">
                      9.8. As per Nigeria housing regulations, you must obtain
                      approval for every property advertisement (located within
                      or outside of Nigeria and display the Housing Permit
                      Number on all advertisements.
                    </p>
                  </li>
                </ul>
                <p className="font-bold my-2">Owners and Landlords</p>
                <ul>
                  <li>
                    <p className="font-medium my-2">
                      9.9. You warrant that you are the Owner/Landlord of the
                      property, or otherwise possess valid authorisation to list
                      the property on the Website.
                    </p>
                  </li>
                  <li>
                    <p className="font-medium my-2">
                      9.10. If you are engaging in short-term or Holiday Home
                      Leasing, you warrant that you possess a license for the
                      activity from Dubai Tourism and Commerce Marketing (DTCM).
                    </p>
                  </li>
                </ul>
                <p className="font-bold my-2">Tenants</p>
                <ul>
                  <li>
                    <p className="font-medium my-2">
                      9.11. You warrant that you possess valid, written consent
                      from your Landlord before advertising on the Website, and
                      that you are legally entitled to publish such
                      advertisement.
                    </p>
                  </li>
                </ul>
                <p className="font-bold my-2">All Advertisers</p>
                <ul>
                  <li>
                    <p className="font-medium my-2">
                      9.12. You may only advertise properties that are currently
                      available for sale or lease. It is at our discretion to
                      remove any listings (advertising fees will not be
                      refunded).
                    </p>
                  </li>
                  <li>
                    <p className="font-medium my-2">
                      9.13. You warrant that the advertisement does not contain
                      unlawful language or use of the premises, including:
                    </p>
                    <p className="ml-4 my-2">
                      9.13.1 defamatory, misleading or deceptive statements;
                    </p>
                    <p className="ml-4 my-2">
                      9.13.2 sharing of a property that exceeds lawful occupancy
                      limits (including, but not limited to, bachelor
                      accommodations and multi-family use);
                    </p>
                    <p className="ml-4 my-2">
                      9.13.3 sharing of a property between unrelated members of
                      the opposite sex;
                    </p>
                    <p className="ml-4 my-2">
                      9.13.4 sharing of a property in any way that is deemed
                      unlawful; and
                    </p>
                    <p className="ml-4 my-2">
                      9.13.5 any other language that promotes illegal or immoral
                      activities under the law of the Nigeria.
                    </p>
                  </li>
                  <li>
                    <p className="font-medium my-2">
                      9.14. If you are listing a property on any of the Website,
                      your obligations are as follows:
                    </p>
                    <p className="ml-4 my-2">
                      9.14.1 The Company’s advertisements include real
                      properties for sale or rent. The Company is not a real
                      estate brokerage and the details of the properties
                      available on the Website are provided to us by third party
                      brokers, landlords, owners or developers;
                    </p>
                    <p className="ml-4 my-2">
                      9.14.2 The Company does not verify the property listing
                      details provided to us by third parties, and makes no
                      warranties or representations as to their accuracy or
                      completeness;
                    </p>
                    <p className="ml-4 my-2">
                      9.14.3 You, the User of the Website, must conduct your own
                      due diligence and must not rely on the details in the
                      advertisements; and
                    </p>
                    <p className="ml-4 my-2">
                      9.14.4 The Company does verify the housing license number
                      of all property broker companies prior to allowing them to
                      advertise on the Website.
                    </p>
                  </li>
                  <li>
                    <p className="font-medium my-2">
                      9.14. If you are listing a property on any of the Website,
                      your obligations are as follows:
                    </p>
                    <p className="ml-4 my-2">
                      9.14.1 The Company’s advertisements include real
                      properties for sale or rent. The Company is not a real
                      estate brokerage and the details of the properties
                      available on the Website are provided to us by third party
                      brokers, landlords, owners or developers;
                    </p>
                    <p className="ml-4 my-2">
                      9.14.2 The Company does not verify the property listing
                      details provided to us by third parties, and makes no
                      warranties or representations as to their accuracy or
                      completeness;
                    </p>
                    <p className="ml-4 my-2">
                      9.14.3 You, the User of the Website, must conduct your own
                      due diligence and must not rely on the details in the
                      advertisements; and
                    </p>
                    <p className="ml-4 my-2">
                      9.14.4 The Company does verify the housing license number
                      of all property broker companies prior to allowing them to
                      advertise on the Website.
                    </p>
                  </li>
                </ul>
                <p className="font-bold my-2">Motors Category</p>
                <ul>
                  <li>
                    <p className="font-medium my-2">
                      9.15. As a User of the Website, you must not offer for
                      sale any type of car, motor vehicle or motorcycle
                      (“Vehicle ”) that is:
                    </p>
                    <p className="ml-4 my-2">
                      9.15.1 located outside of the Nigeria, unless you can
                      prove ownership of the Vehicle upon request;
                    </p>
                    <p className="ml-4 my-2">
                      9.15.2 that is not immediately for sale;
                    </p>
                    <p className="ml-4 my-2">
                      9.15.3 that is not accurately described by the category in
                      which it is advertised;
                    </p>
                    <p className="ml-4 my-2">
                      9.15.4 that you are not the owner of, or in all other
                      cases, which you do not have the rights to sell; or
                    </p>
                    <p className="ml-4 my-2">
                      9.15.5 without true and accurate pricing of the Vehicle
                      displayed within the listing.
                    </p>
                  </li>
                  <li>
                    <p className="font-medium my-2">
                      9.16. We may request that you provide proof of ownership,
                      and that the Vehicle is located in the Nigeria or has been
                      cleared by Nigeria customs. If you do not provide us with
                      proof within 24 hours of request, we may immediately
                      remove the relevant advertisement/content without further
                      notice and no refund will be made.
                    </p>
                  </li>
                </ul>
              </article>
              <article className="my-4">
                <p className="font-bold my-2">
                  10. CALL RECORDING FOR REAL ESTATE BROKERS
                </p>
                <ul>
                  <li>
                    <p className="font-medium my-2">
                      10.1 Some of the Nigeria licensed real estate brokers
                      (Brokers) that advertise on our Website subscribe to a
                      service whereby the property listing has a uniquely
                      identified phone number and the call is automatically
                      recorded for quality and training purposes. By using the
                      Services, you expressly agree to having your phone call
                      recorded when you call a Broker in relation to
                      advertisements in the Property category of the Website and
                      you agree that no further warning or consent is required.
                    </p>
                  </li>
                </ul>
              </article>
              <article className="my-4">
                <p className="font-bold my-2">11. AD SERVICES PACKAGE</p>
                <ul>
                  <li>
                    <p className="font-medium my-2">
                      11.1 If you are a Client, Customer or any of their
                      officers, directors, employees, agents, contractors,
                      sub-contractors or representatives, the following
                      additional terms also apply to you:
                    </p>
                    <p className="ml-4 my-2">
                      11.1.1 The Company may publish on the Website any
                      information supplied or made available to the Company by
                      or on behalf of the Client. The Client acknowledges and
                      agrees that the Company shall not be regarded as being in
                      breach of any obligation of confidentiality as a result of
                      the publication of such information.
                    </p>
                    <p className="ml-4 my-2">
                      11.1.2 The Company may made operational changes to the Ad
                      Services Package and individual products thereunder at any
                      time. The Company will use reasonable endeavours to
                      provide notification of material changes by posting a
                      message on the Website or by informing the Client.
                    </p>
                    <p className="ml-4 my-2">
                      11.1.3 Subject to Clause 6.11, in no event shall the
                      Company’s liability with respect to the provision of the
                      Ad Services Package to the Client, regardless of the cause
                      of action and losses suffered by the Client, exceed AED
                      20,000.
                    </p>
                  </li>
                </ul>
              </article>
              <article className="my-4">
                <p className="font-bold my-2">12. GENERAL</p>
                <ul>
                  <li>
                    <p className="font-medium my-2">
                      12.1 Subject to Clause ‎5.2, these Terms, the Privacy
                      Policy and any other expressly incorporated document
                      constitute the entire agreement between you and the
                      Company and neither party has relied on any representation
                      made by the other party unless such representation is
                      expressly included in these Terms. Nothing in this Clause
                      ‎12.1 shall relieve either party of liability for
                      fraudulent misrepresentations and neither party shall be
                      entitled to any remedy for either any negligent or
                      innocent misrepresentation except to the extent (if any)
                      that a court or arbitrator may allow reliance on the same
                      as being fair and reasonable.
                    </p>
                  </li>
                  <li>
                    <p className="font-medium my-2">
                      12.2 The Company reserves the right to alter its terms of
                      business from time to time. The Effective Date at the time
                      the User is reading these terms is set out at the top of
                      these Terms. Prior to using the Website again in the
                      future, Users should check that the Effective Date has not
                      changed. If it has, the User should examine the new set of
                      terms and conditions and only use the Website if it
                      accepts the new terms and conditions. If you do not accept
                      the changes, you should immediately discontinue your
                      access to the Website and your use of the Service.
                    </p>
                  </li>

                  <li>
                    <p className="font-medium my-2">
                      12.3 If any provision of these Terms or part thereof shall
                      be void for whatever reason, it shall be deemed deleted
                      and the remaining provisions shall continue in full force
                      and effect.
                    </p>
                  </li>

                  <li>
                    <p className="font-medium my-2">
                      12.4 The Company reserves the right to assign or
                      subcontract any or all of its rights and obligations under
                      these Terms. The User may not assign or otherwise transfer
                      its rights or obligations under these Terms without the
                      Company’s prior written consent.
                    </p>
                  </li>

                  <li>
                    <p className="font-medium my-2">
                      12.5 Any notice given pursuant to these Terms may be
                      served personally or by email to the last known email
                      address of the addressee. It is the responsibility of
                      Users promptly to update the Company of any change of
                      address or email address. Such notice shall be deemed to
                      have been duly served upon and received by the addressee,
                      when served personally, at the time of such service or
                      when sent by email 24 hours after the email has been sent.
                    </p>
                  </li>
                  <li>
                    <p className="font-medium my-2">
                      12.6 The Company shall not be liable for any loss suffered
                      by the other party or be deemed to be in default for any
                      delays or failures in performance hereunder resulting from
                      acts or causes beyond its reasonable control or from any
                      acts of God, acts or regulations of any governmental or
                      supra-national authority.
                    </p>
                  </li>
                  <li>
                    <p className="font-medium my-2">
                      12.7 Any delay or forbearance by the Company in enforcing
                      any provisions of these Terms or any of its rights
                      hereunder shall not be construed as a waiver of such
                      provision or right thereafter to enforce the same.
                    </p>
                  </li>
                  <li>
                    <p className="font-medium my-2">
                      12.8 The headings in these Terms are solely used for
                      convenience and shall not have any legal or contractual
                      significance.
                    </p>
                  </li>
                  <li>
                    <p className="font-medium my-2">
                      12.9 These Terms shall be governed by and construed in
                      accordance with the law of the Nigeria, and the parties
                      submit to the exclusive jurisdiction of the Nigeria
                      Courts, save that the Company may take action in any
                      relevant jurisdiction to enforce its Intellectual Property
                      Rights. You agree that any cause of action brought by you
                      arising out of or related to your use of the Service
                      and./or the Website must commence within a reasonable time
                      and in any event within one (1) year after the cause of
                      action accrues.
                    </p>
                  </li>
                  <li>
                    <p className="font-medium my-2">
                      12.10 These Terms shall inure to the benefit of and be
                      binding upon each party's successors.
                    </p>
                  </li>
                  <li>
                    <p className="font-medium my-2">
                      12.11 If these Terms are translated into any other
                      language and there is a discrepancy between the English
                      text and the text of the other language, the English text
                      version will prevail.
                    </p>
                  </li>
                  <li>
                    <p className="font-medium my-2">
                      12.12 All website design, text, graphics, the selection
                      and arrangement thereof are Copyright ©2022, ekohub.ng ALL
                      RIGHTS RESERVED.
                    </p>
                  </li>
                  <li>
                    <p className="font-medium my-2">
                      12.13 Eko Hub is a trademark of EKO HUB Ltd or its
                      subsidiaries and may be registered in certain parts of the
                      world.
                    </p>
                  </li>
                </ul>
              </article>
              {/*  terms and conditions */}
              <div>
                <p className="text-center font-bold text-xl">
                  TERMS AND CONDITIONS – EKO HUB PREMIUM
                </p>
                <p className="text-center my-4">
                  These Terms and Conditions represent the terms and conditions
                  subject to which the Services will be provided to Users. The
                  Website Terms of Use (https://ekohub.ng/terms/) shall apply in
                  conjunction with these Terms and Conditions.
                </p>
                <article className="my-4">
                  <p className="font-bold my-2">DEFINITIONS</p>
                  <ul>
                    <li>
                      <p className="font-medium my-2">
                        1.1 The following capitalised terms shall have the
                        following meaning, except where the context otherwise
                        requires:
                      </p>
                      <p className="my-2">“Naira”</p>
                      <p className="my-2">
                        “Applicable Law ” means any law, proclamation, decree,
                        ministerial decision, statute, statutory instrument,
                        order, regulation, resolution, notice, legal precedent,
                        by-law, directive, treaty or other instrument or
                        requirement having the force of law within Nigeria and
                        issued, declared, passed or given effect in any manner
                        by any government authority;
                      </p>
                      <p className="my-2">“Buyer” means a buyer of a Device;</p>
                      <p className="my-2">
                        “Device” means a mobile phone, tablet or other
                        electronic device;
                      </p>
                      <p className="my-2">
                        “Intellectual Property Rights ” means all intellectual
                        property, including patents, trademarks, rights in
                        goodwill, database rights and rights in data, rights in
                        designs, copyrights and topography rights (whether or
                        not any of these rights are registered, and including
                        applications and the right to apply for registration of
                        any such rights) and all inventions, rights in know-how,
                        trade secrets and confidential information, customer and
                        supplier lists and other proprietary knowledge and
                        information and all rights under licences and consents
                        in relation to any such rights and all rights and forms
                        of protection of a similar nature or having equivalent
                        or similar effect to any of these which may subsist
                        anywhere in the world for their full term, including any
                        renewals and extensions;
                      </p>
                      <p className="my-2">
                        “List Price” means the price at which a Device is listed
                        for purchase on the Website;
                      </p>
                      <p className="my-2">
                        “Personnel” means a Party’s officers, directors,
                        employees, agents, contractors, sub-contractors and
                        representatives;
                      </p>
                      <p className="my-2">
                        “Registration Details ” means the details a Seller must
                        provide upon registering for the Services and the
                        Website from time to time (for example: name, phone
                        numbers, email address, age, address and/or tax status)
                        and any documentation as may be requested by Eko Hub
                        from time to time;
                      </p>
                      <p className="my-2">
                        “Seller” means a seller of a Device;
                      </p>
                      <p className="my-2">
                        “Seller Offer” means an offer submitted by a Seller to
                        Eko Hub to sell a Device through the Services;
                      </p>
                      <p className="my-2">
                        “Services” means the services provided by Eko Hub,
                        pursuant to which Users can sell and buy Devices through
                        the Website;
                      </p>
                      <p className="my-2">
                        “Terms and Conditions” means these terms and conditions
                        with respect to the Services, as may be amended by Eko
                        Hub from time to time;
                      </p>
                      <p className="my-2">“Unacceptable” means:</p>
                      <p className="ml-2 my-2">
                        (a) illegal, illicit, indecent, obscene, racist,
                        offensive, pornographic, pedophilic, insulting, false,
                        unreliable, misleading, harmful or potentially harmful
                        to minors, threatening, libelous, alleged to be or
                        actually defamatory or in infringement of third-party
                        rights (of whatever nature and including, without
                        limitation, any Intellectual Property Rights), invasive
                        of another’s privacy or other rights, to relate to or
                        encourage money laundering or illegal gambling;
                      </p>
                      <p className="ml-2 my-2">
                        (b) in breach of any applicable regulations, standards
                        or codes of practice (notwithstanding that compliance
                        may not be compulsory);
                      </p>
                      <p className="ml-2 my-2">
                        (c) in contravention of legislation, including without
                        limitation, that relating to weapons, animals or
                        alcohol; or
                      </p>
                      <p className="ml-2 my-2">
                        (d) harmful to EKOHUB'S reputation.
                      </p>
                      <p className="my-2">
                        “Users” means Sellers and Buyers, and each shall be
                        referred to as a “User”;
                      </p>
                      <p className="my-2">“VAT” means value-added-tax; and</p>
                      <p className="my-2">
                        “Website Terms of Use ” means the Website user terms and
                        all other EKOHUB policies listed on the Website, as
                        amended by EKOHUB from time to time, which can be found
                        at the following link:{' '}
                        <Link
                          to="https://ekohub.ng/terms/"
                          className="text-red-400"
                        >
                          https://ekohub.ng/terms/
                        </Link>
                      </p>
                      <p className="my-2"></p>
                      <p className="my-2"></p>
                    </li>
                  </ul>
                </article>
                <article className="my-4">
                  <p className="font-bold my-2">2. GENERAL TERMS</p>
                  <ul>
                    <li>
                      <p className="font-medium my-2">
                        2.1 These Terms and Conditions shall be applicable with
                        respect to the Services, and Users agree to fully comply
                        with them by using the Services.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium my-2">
                        2.2 Eko Hub may revise, amend, discontinue or make any
                        other changes to the Services at any time. Eko hub will
                        use reasonable endeavours to provide notification of
                        material changes by posting a message on the Website or
                        by informing Users.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium my-2">
                        2.3 Users warrant and represent that all information
                        supplied or made available to Eko hub by or on behalf of
                        Users is true, accurate and not misleading or deceptive.
                        Eko hub has the right, but not the obligation, to remove
                        from the Website without notice any content supplied by
                        or information relating to Users whenever Ekohub deems
                        such action necessary in its absolute discretion.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium my-2">
                        2.4 Users shall, when using the Services:
                      </p>
                      <p className="ml-2 my-2">
                        (a) ensure that Users and their respective Personnel
                        comply with the Website Terms of Use and Applicable Law;
                        and
                      </p>
                      <p className="ml-2 my-2">
                        (b) obtain all necessary rights, licences and consents
                        from regulatory authorities and other third parties.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium my-2">
                        2.5 Users shall ensure that their respective Personnel
                        comply with all security procedures relevant to the use
                        of the Services and interacting with Eko hub Users shall
                        inform Ekohub immediately if relevant security
                        credentials are compromised in any way. Users shall
                        indemnify (and keep indemnified) Eko hub for any loss to
                        Eko hub resulting from the disclosure of any security
                        credentials to a third party and/or failure by Users to
                        keep any security credentials secure, whether such
                        disclosure or failure was committed by an employee of
                        such Users or otherwise.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium my-2">
                        2.6 Users hereby consent to the monitoring and recording
                        by Eko hub (or any of its suppliers) at any time of any
                        communications, information or data exchanged between
                        the Parties or suppliers of the Parties and in
                        connection with these Terms and Conditions, use of the
                        Services and the Website (whether this is through the
                        use of call tracking software or otherwise).
                      </p>
                    </li>
                    <li>
                      <p className="font-medium my-2">
                        2.7 Ekohub will not be liable for any delay or failure
                        to perform any of its obligations under these Terms and
                        Conditions by reasons, events or other matters beyond
                        Eko hub reasonable control, including but not limited to
                        the collection and the delivery of Devices.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium my-2">
                        2.8 No failure or delay by either Party to enforce, or
                        exercise, or any partial, single or defective exercise
                        of enforcement, of any right, remedy, power or privilege
                        given to that Party pursuant to these Terms and
                        Conditions shall constitute a waiver or partial waiver
                        of any right, remedy, power or privilege or operate to
                        prevent the exercise or enforcement of any further
                        right, remedy, power or privilege at any subsequent
                        time. Any waiver of any right, remedy, power or
                        privilege will be effective only if made in writing.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium my-2">
                        2.9 Eko hub is entitled to assign or subcontract any or
                        all of its rights and obligations under these Terms and
                        Conditions. A User shall not assign or otherwise
                        transfer its rights, interests or obligations under
                        these Terms and Conditions to any third party without
                        the prior written consent of Eko Hub
                      </p>
                    </li>
                    <li>
                      <p className="font-medium my-2">
                        2.10 Nothing in these Terms and Conditions shall be
                        construed as creating any agency, partnership or joint
                        venture between the Parties.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium my-2">
                        2.11 Nothing in these Terms and Conditions shall confer,
                        nor be intended to confer, any right or benefit on any
                        third party.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium my-2">
                        2.12 If any term of these Terms and Conditions is found
                        to be illegal, void, invalid or unenforceable under the
                        laws of any jurisdiction this will not affect the
                        legality, validity and enforceability of the remainder
                        of these Terms and Conditions in that jurisdiction, and
                        the legality, validity and enforceability of these Terms
                        and Conditions in any other jurisdiction shall not be
                        affected.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium my-2">
                        2.13 If there is any conflict between the terms of these
                        Terms and Conditions and the Website Terms of Use, these
                        Terms and Conditions shall prevail.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium my-2">
                        2.14 If these Terms and Conditions are translated into
                        any other language, and there is a discrepancy between
                        the English text and the text of the other language, the
                        English text will govern.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium my-2">
                        2.15 These Terms and Conditions are governed by the law
                        of Nigeria. Any dispute which is not settled amicably
                        between the Parties shall be finally settled by the
                        courts of the Nigeria Law
                      </p>
                    </li>
                    <li>
                      <p className="font-medium my-2"></p>
                    </li>
                  </ul>
                </article>
                <article className="my-4">
                  <p className="font-bold my-2">3. SELLER TERMS</p>
                  <p className="font-bold my-2"> Seller Requirements</p>
                  <ul>
                    <li>
                      <p className="font-medium my-2">3.1 A Seller must:</p>
                      <p className="ml-2 my-2">
                        (a) be at least eighteen (18) years of age, in the case
                        of an individual;
                      </p>
                      <p className="ml-2 my-2">
                        (b) be legally capable of entering into a contract with
                        Eko Hub.
                      </p>
                      <p className="ml-2 my-2">
                        (c) not have any criminal record and be compliant with
                        all Applicable Laws;
                      </p>
                      <p className="ml-2 my-2">
                        (d) be resident in Lagos, Nigeria, and
                      </p>
                      <p className="ml-2 my-2">
                        (e) have valid identification or incorporation documents
                        as requested by Eko Hub in the case of an individual or
                        legal entity, respectively.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium my-2">
                        3.2 Each Seller warrants and represents that:
                      </p>
                      <p className="ml-2 my-2">
                        (a) it is the legal owner of the Device and is legally
                        authorised to sell the Device;
                      </p>
                      <p className="ml-2 my-2">
                        (b) their use of the Website and sale of the Device
                        would not be in breach of any Applicable Law or
                        agreement or contract to which the Seller is a party;
                        and
                      </p>
                      <p className="ml-2 my-2">
                        (c) the Device is free from any encumbrances.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium my-2">
                        3.3 The Seller must provide a true, accurate and correct
                        description of the Device and its specifications
                        including, but not limited, the model, the storage space
                        and the condition.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium my-2">
                        3.4 The Seller must ensure the Device is not blocked or
                        PIN locked when collected by Eko Hub.
                      </p>
                    </li>

                    <li>
                      <p className="font-medium my-2">
                        3.5 In registering for the Services and the Website,
                        Sellers must provide true, accurate, current and
                        complete Registration Details. Sellers must update any
                        changes to their Registration Details (except age).
                      </p>
                    </li>
                    <li>
                      <p className="font-medium my-2">
                        3.6 A Seller must keep confidential any user
                        identification and password details set-up or given to
                        the Seller as part of Eko Hub security procedures and
                        must not disclose them to any third party.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium my-2">
                        3.7 Each Seller is solely responsible for any use of, or
                        action taken under the Seller’s account, and shall fully
                        indemnify Ekohub and its affiliates, directors,
                        officers, employees, authorised representatives,
                        consultants, professional consultants or authorised
                        agents from any damages or injury suffered by Eko Hub
                        resulting from any use of the Seller’s account or any
                        breach of Applicable Law.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium my-2">
                        3.8 Eko Hub reserves the right to suspend or terminate a
                        Seller’s account where, in its absolute discretion, it
                        suspects or deems or in Eko Hub's opinion the Seller has
                        breached these Terms and Conditions or deems such
                        suspension or termination is otherwise appropriate. In
                        the event of such suspension or termination, Eko hub
                        will notify the Seller by email and the Seller must not
                        seek to re-register on the Website either directly or
                        indirectly or through a related entity or another
                        person. Eko Hub's rights under this paragraph shall not
                        prejudice any other right or remedy ekohub may have in
                        respect of any breach, or any rights, obligations or
                        liabilities accrued prior to such suspension or
                        termination.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium my-2">
                        3.9 Eko Hub may refuse to provide the Services to a
                        Seller if, in its sole discretion, Eko hub considers
                        that the Seller has not complied with any obligation in
                        this clause 3.
                      </p>
                    </li>
                    <li>
                      <p className="my-2">
                        Initial Inspection and Collection of Devices
                      </p>
                      <p className="font-medium my-2">
                        3.10 If Eko Hub has accepted a Seller Offer, Ekohub will
                        collect the Device from the Seller at the address and
                        time agreed with the Seller. Eko Hub shall not be liable
                        for any failure to collect the Device at the agreed time
                        or for any delay whatsoever.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium my-2">
                        3.11 Eko Hub will only collect Devices from addresses
                        located in Lagos, Nigeria.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium my-2">
                        3.12 Prior to taking possession of a Device, Eko Hub
                        will carry out an initial inspection of the Device at
                        the Seller’s address, which will include taking photos
                        of the Device (“ Initial Inspection”).
                      </p>
                    </li>
                    <li>
                      <p className="font-medium my-2">
                        3.13 If, following the Initial Inspection, Eko Hub
                        considers, in its sole discretion, that a Device is,
                        without limitation, in breach of these Terms and
                        Conditions, does not conform with the description
                        provided in the Seller Offer, is not in a satisfactory
                        condition or is Unacceptable, Eko Hub may refuse to
                        purchase the Device and Eko Hub shall have no liability
                        to the Seller in this regard.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium my-2">
                        3.14 If, following the Initial Inspection, Eko hub
                        agrees to purchase the Device, Eko hub will pay the
                        agreed purchase price to the Seller following which Eko
                        hub shall be the legal owner of the Device and the
                        Seller shall have no further ownership rights in respect
                        of the Device.
                      </p>
                    </li>
                    <li>
                      <p className="my-2">Final Inspection of Devices</p>
                      <p className="font-medium my-2">
                        3.15 Upon receipt of a Device from a Seller, Eko hub
                        will carry out a further inspection of the Device to
                        determine whether it may be advertised for sale on the
                        Website (“ Final Inspection”). Eko hub will only sell a
                        Device which has passed the Final Inspection.
                      </p>
                    </li>
                    <li>
                      <p className="my-2">Sim Card Removal and Data Deletion</p>
                      <p className="font-medium my-2">
                        3.16 It is a condition to the sale of a Device that,
                        prior to collection of the Device by Eko hub, you remove
                        any SIM cards, memory cards or other media devices
                        inserted into the Device and delete all personal details
                        and data including, without limitation, all names,
                        mobile phone/device numbers, SMS messages, applications,
                        photographs, games, songs, video and all other data from
                        the Device.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium my-2">
                        3.17 In addition to clause 3.16, Eko Hub will complete a
                        factory reset on all Devices to ensure all personal data
                        is deleted from Devices.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium my-2">
                        3.18 Eko hub will not accept liability for any loss,
                        damage or costs which you incur if any SIM card, memory
                        card or other media device is sent with the Device or if
                        personal data remains on the Device including, without
                        limitation, any charges which you incur as a result of
                        use of your Device by any person, whether incurred
                        before or after our receipt of the Device. We will not
                        be in any way responsible for the security,
                        confidentiality, protection, use or disclosure of any
                        personal data that you fail to delete or any losses or
                        costs that arise as a result and shall not be deemed to
                        be holding, processing or otherwise using the data on
                        your behalf in any way.
                      </p>
                    </li>
                  </ul>
                </article>
                <article className="my-4">
                  <p className="font-bold my-2">4. BUYER TERMS</p>
                  <p>Buyer Requirements</p>
                  <ul>
                    <li>
                      <p className="font-medium my-2">4.1 All Buyers must:</p>
                      <p className="ml-2 my-2">
                        (a) be at least eighteen (18) years of age, in the case
                        of an individual;
                      </p>
                      <p className="ml-2 my-2">
                        (b) be legally capable of entering into a contract with
                        Eko hub
                      </p>
                      <p className="ml-2 my-2">
                        (c) not have any criminal record and be compliant with
                        all Applicable Laws;
                      </p>
                      <p className="ml-2 my-2">
                        (d) be resident in Lagos, Nigeria; and
                      </p>
                      <p className="ml-2 my-2">
                        (e) have valid identification or incorporation documents
                        as requested by Eko hub in the case of an individual or
                        legal entity, respectively.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium my-2">
                        4.2 Each Buyer warrants and represents that:
                      </p>
                      <p className="ml-2 my-2">
                        (a) they are legally authorised to purchase the Device;
                        and
                      </p>
                      <p className="ml-2 my-2">
                        (b) their use of the Website and purchase of the Device
                        is not in breach of any Applicable Law including,
                        without limitation, anti-money laundering laws or any
                        agreement or contract to which the Buyer is a party.
                      </p>
                    </li>
                    <li>
                      <p className="my-2">Devices</p>
                      <p className="font-medium my-2">
                        4.3 Eko hub does not guarantee that the Final Inspection
                        will identify all defects in the Device.
                      </p>
                    </li>

                    <li>
                      <p className="font-medium my-2">
                        4.4 Eko hub does not give any representation or warranty
                        as to the description, specification, quality, price of
                        or the accuracy of any information related to any Device
                        listed for sale on the Website.
                      </p>
                    </li>
                    <li>
                      <p className="my-2">Offer and Price</p>
                      <p className="font-medium my-2">
                        4.5 The Buyer shall have the option to purchase the
                        Device at the List Price or make an offer for the Device
                        at below the List Price.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium my-2">
                        4.6 Eko hub shall have no obligation whatsoever to
                        accept an offer from the Buyer and may, in its sole
                        discretion, reject an offer for a Device.
                      </p>
                    </li>
                    <li>
                      <p className="my-2">Payment</p>
                      <p className="font-medium my-2">
                        4.7 If Eko hub accepts an offer from a Buyer to purchase
                        a Device, Eko hub shall send a payment link to the Buyer
                        to purchase the Device. Eko hub acceptance of an offer
                        does not guarantee that the Device will be sold to the
                        Buyer.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium my-2">
                        4.8 The Buyer acknowledges and agrees that it will only
                        be entitled to receive the Device once it has made
                        payment for the Device and such payment has been
                        received by Eko hub and that the Device may be sold to a
                        third party if Eko hub receives payment for the Device
                        from such third party before the Buyer. An advertisement
                        in respect of a Device will only be removed from the
                        Website after a Buyer has paid for the relevant Device
                        and such payment has been received by Eko hub
                      </p>
                    </li>
                    <li>
                      <p className="font-medium my-2">
                        4.9 The Buyer shall pay for a Device using any one of
                        the payment methods specified by Eko hub from time to
                        time.
                      </p>
                    </li>
                    <li>
                      <p className="my-2">Delivery</p>
                      <p className="font-medium my-2">
                        4.10 As soon as reasonably practicable following receipt
                        of payment from the Buyer, Eko hub shall deliver the
                        Device to the Buyer at a time and address agreed with
                        the Buyer. Eko hub may reschedule the time and date of
                        delivery and shall have no liability in respect thereof.
                        Eko hub shall have no liability for any delay in
                        delivering the Device to the Buyer.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium my-2">
                        4.11 Eko hub will only deliver Devices to addresses
                        located in Lagos, Nigeria.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium my-2">
                        4.12 All deliveries shall be subject to a delivery fee
                        as determined by Eko hub from time to time, which shall
                        be exclusive of VAT.{' '}
                      </p>
                    </li>
                  </ul>
                </article>
                <article className="my-4">
                  <p className="font-bold my-2">5. WARRANTY</p>
                  <ul>
                    <li>
                      <p className="font-medium my-2">
                        5.1 Eko hub provides a 3-month warranty on Devices that
                        are faulty or defective starting from the date of
                        receipt of the Device by the Buyer. A Device will not be
                        confirmed as eligible for repair or replacement under
                        this warranty until it has been confirmed to the Buyer
                        by Eko hub that the Device is accepted for return.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium my-2">
                        5.2 The Eko hub warranty will only apply to parts that
                        have been replaced by Eko hub, All such parts will be
                        listed in the documentation provided to the Buyer upon
                        purchase. The Buyer must also provide the original
                        purchase invoice and documentation to Eko hub in order
                        to make a warranty claim.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium my-2">
                        5.3 The Eko hub warranty will not apply in the following
                        circumstances:
                      </p>
                      <p className="ml-2 my-2">
                        (a) the Device has been tampered with or disassembled in
                        any way;
                      </p>
                      <p className="ml-2 my-2">
                        (b) the Eko hub warranty seal on the Device is broken or
                        tampered with;
                      </p>
                      <p className="ml-2 my-2">
                        (c) the Device is water damaged;
                      </p>
                      <p className="ml-2 my-2">
                        (d) the Device is physically damaged or dropped
                        (accidental or otherwise);
                      </p>
                      <p className="ml-2 my-2">
                        (e) the screen on the Device is damaged as a result of
                        mishandling/misuse;{' '}
                      </p>
                      <p className="ml-2 my-2">
                        (f) repairs are attempted on the Device by any party
                        other than an authorised Eko hub employee;
                      </p>
                      <p className="ml-2 my-2">
                        (g) the original software is altered or modified (e.g.
                        “root” for Android devices or “jailbreak” for Apple
                        devices);
                      </p>
                      <p className="ml-2 my-2">
                        (h) the warranty does not extend to cover the
                        accessories to the Device such as the charger, cable or
                        earphones;
                      </p>
                      <p className="ml-2 my-2">
                        (i) any person other than the initial Buyer of the
                        Device is making the warranty claim (the warranty is not
                        transferrable);
                      </p>
                      <p className="ml-2 my-2">
                        (j) a Buyer has already successfully made a warranty
                        claim and had their Device repaired or replaced; and
                      </p>
                      <p className="ml-2 my-2">
                        (k) such other circumstances where Ekohub, in its
                        reasonable opinion, believes a Buyer is acting in a
                        fraudulent or deceptive manner in order to make
                        financial gains.
                      </p>
                    </li>
                    <li>
                      <p className="font-medium my-2">
                        5.4 In order to make a warranty claim, please contact
                        contact@ekohub.info and provide the details of the
                        warranty claim, including videos and pictures of the
                        defect in the Device if possible.
                      </p>
                    </li>
                  </ul>
                </article>
                <article className="my-4">
                  <p className="font-bold my-2">6. LIMITATON OF LIABILITY</p>
                  <ul>
                    <li>
                      <p className="font-medium my-2">
                        In no event shall Ekohub's liability under these Terms
                        and Conditions, regardless of the cause of action and
                        losses suffered by a User, exceed 500,000. Naira
                      </p>
                    </li>
                  </ul>
                </article>
                <article className="my-4">
                  <p className="font-bold my-2">6. LIMITATON OF LIABILITY</p>
                  <ul>
                    <li>
                      <p className="font-medium my-2">
                        In no event shall Ekohub's liability under these Terms
                        and Conditions, regardless of the cause of action and
                        losses suffered by a User, exceed 500,000. Naira
                      </p>
                    </li>
                  </ul>
                </article>
              </div>
            </div>
          </div>
        </MobileLayout>
      </Mobile>
    </>
  );
};
export default Policy;
