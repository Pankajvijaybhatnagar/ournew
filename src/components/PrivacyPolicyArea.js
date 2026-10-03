import Link from "next/link";
import React from "react";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaShieldAlt,
  FaUserShield,
  FaWhatsapp,
} from "react-icons/fa";

const LAST_UPDATED = "October 3, 2026";
const CONTACT_EMAIL = "Director@digi1xprt.com";

const sections = [
  {
    id: "introduction",
    title: "Introduction",
    content: (
      <>
        <p>
          Digi1xprt (&quot;<strong>Digi1xprt</strong>&quot;, &quot;
          <strong>we</strong>&quot;, &quot;<strong>us</strong>&quot; or &quot;
          <strong>our</strong>&quot;) provides a marketing and customer
          engagement platform that helps small businesses reach their customers
          over WhatsApp. Through our dashboard, businesses (our
          &quot;<strong>Clients</strong>&quot;) upload their contact lists, send
          approved template messages such as promotional offers and alerts, and
          view analytics on how their campaigns perform.
        </p>
        <p>
          This Privacy Policy explains what information we collect, how we use
          it, who we share it with, and the choices and rights available to
          you. It applies to our website, our dashboard and our messaging
          services (together, the &quot;<strong>Services</strong>&quot;).
        </p>
        <p>
          By using our Services, you agree to the practices described in this
          policy. If you do not agree, please do not use the Services.
        </p>
      </>
    ),
  },
  {
    id: "who-we-are",
    title: "Our Role: Who Controls Your Data",
    content: (
      <>
        <p>
          How we handle your information depends on how you interact with us:
        </p>
        <ul>
          <li>
            <strong>Clients and website visitors:</strong> For account,
            billing and website data, Digi1xprt decides how and why the data is
            used, and acts as the data controller (or &quot;Data
            Fiduciary&quot; under Indian law).
          </li>
          <li>
            <strong>Recipients of our Clients&apos; messages:</strong> When a
            business uses our platform to message you, that business decides
            who to contact and what to send. The business is the data
            controller, and Digi1xprt processes your data only on its behalf
            and on its instructions, as a data processor.
          </li>
        </ul>
        <div className="privacy-note">
          If you received a WhatsApp message from a business that uses
          Digi1xprt and want to stop receiving messages or access your data,
          the quickest route is to contact that business directly. You can
          also reach us and we will help forward your request.
        </div>
      </>
    ),
  },
  {
    id: "information-we-collect",
    title: "Information We Collect",
    content: (
      <>
        <h5>a) Information provided by our Clients</h5>
        <ul>
          <li>
            Account details such as business name, contact person, email
            address, phone number and login credentials.
          </li>
          <li>
            Billing details such as GST number, billing address and payment
            records. Card payments are handled by our payment partners, and we
            do not store full card numbers.
          </li>
          <li>
            Contact lists uploaded to the dashboard, which may include
            recipients&apos; names, phone numbers and any custom fields the
            Client chooses to add.
          </li>
          <li>Message templates, campaign settings and media files.</li>
        </ul>

        <h5>b) WhatsApp Platform Data</h5>
        <p>
          To deliver messages through the WhatsApp Business Platform operated
          by Meta, we process the following &quot;Platform Data&quot;:
        </p>
        <ul>
          <li>
            <strong>Phone numbers</strong> of message recipients and of the
            Client&apos;s WhatsApp Business account.
          </li>
          <li>
            <strong>Message content</strong> of the approved template messages
            sent, and any replies recipients send back.
          </li>
          <li>
            <strong>Delivery and read receipts</strong>, meaning whether a
            message was sent, delivered, read or failed, and when.
          </li>
          <li>
            <strong>Opt-in and opt-out status</strong> and message timestamps.
          </li>
        </ul>

        <h5>c) Information collected automatically</h5>
        <ul>
          <li>
            Device and usage information such as IP address, browser type,
            pages visited and actions taken in the dashboard.
          </li>
          <li>
            Cookies and similar technologies used to keep you signed in,
            remember your preferences and understand how our website is used.
          </li>
        </ul>

        <h5>d) Information you send us</h5>
        <p>
          When you fill in our contact form, email us or speak with our team,
          we collect the details you share, such as your name, email, phone
          number and message.
        </p>
      </>
    ),
  },
  {
    id: "how-we-use",
    title: "How We Use Information",
    content: (
      <>
        <p>We use the information we collect only to:</p>
        <ul>
          <li>
            <strong>Send messages:</strong> deliver approved WhatsApp template
            messages, such as promotional offers and alerts, to the contacts
            our Clients choose.
          </li>
          <li>
            <strong>Measure campaigns:</strong> use delivery and read receipts
            to show Clients analytics such as how many messages were delivered
            and opened.
          </li>
          <li>
            <strong>Manage consent:</strong> record opt-outs so that
            recipients who ask to stop receiving messages are not contacted
            again.
          </li>
          <li>
            <strong>Run the platform:</strong> create and manage Client
            accounts, provide support, process payments and send service
            notices.
          </li>
          <li>
            <strong>Keep things secure:</strong> prevent spam, fraud and abuse,
            and enforce our terms and WhatsApp&apos;s policies.
          </li>
          <li>
            <strong>Improve the Services:</strong> fix problems and develop new
            features, using aggregated or de-identified data where we can.
          </li>
          <li>
            <strong>Meet legal obligations:</strong> comply with applicable
            laws, regulations and lawful requests.
          </li>
        </ul>
        <div className="privacy-highlight">
          <FaShieldAlt />
          <p>
            We <strong>do not sell</strong> personal data. We do not use Platform
            Data or our Clients&apos; contact lists for our own advertising, and
            we do not share them with data brokers. We do not use them to build
            profiles of recipients or to train third-party models.
          </p>
        </div>
      </>
    ),
  },
  {
    id: "legal-basis",
    title: "Consent & Legal Basis",
    content: (
      <>
        <p>
          We process personal data on the basis of consent, performance of our
          contract with Clients, compliance with law, and our legitimate
          interest in operating a secure and reliable service.
        </p>
        <p>
          <strong>Client responsibility for opt-in:</strong> Clients must
          obtain valid opt-in consent from every person they message through
          our platform, as required by WhatsApp&apos;s Business Messaging
          Policy and applicable law. They must also honour opt-out requests
          promptly. Clients must not upload contacts who have not agreed to be
          contacted.
        </p>
      </>
    ),
  },
  {
    id: "sharing",
    title: "How We Share Information",
    content: (
      <>
        <p>We share information only in the following cases:</p>
        <ul>
          <li>
            <strong>Meta / WhatsApp:</strong> Phone numbers and message content
            are sent to Meta Platforms, Inc. and WhatsApp LLC so the WhatsApp
            Business Platform can deliver messages. Meta handles that data under
            its own terms and privacy policy.
          </li>
          <li>
            <strong>Service providers:</strong> We use trusted vendors for cloud
            hosting, data storage, email delivery, payment processing and
            analytics. They act on our instructions and are bound by
            confidentiality and data protection obligations.
          </li>
          <li>
            <strong>Our Clients:</strong> Clients can see campaign results,
            delivery and read status, and replies for the messages they send.
          </li>
          <li>
            <strong>Legal reasons:</strong> We may disclose information when
            required by law, court order or a government authority, or when
            needed to protect the rights, safety or property of Digi1xprt, our
            users or the public.
          </li>
          <li>
            <strong>Business transfers:</strong> If we are involved in a merger,
            acquisition or sale of assets, information may be transferred, and
            it will remain subject to this policy.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "retention",
    title: "Data Retention",
    content: (
      <>
        <p>
          We keep personal data only as long as we need it for the purposes in
          this policy:
        </p>
        <ul>
          <li>
            <strong>Contact lists and message data</strong> are kept while the
            Client&apos;s account is active, or until the Client deletes them.
          </li>
          <li>
            <strong>Delivery and read receipts</strong> are kept for campaign
            reporting and then deleted or anonymised.
          </li>
          <li>
            <strong>Opt-out records</strong> are kept for as long as needed to
            make sure an opted-out person is not messaged again.
          </li>
          <li>
            <strong>Billing records</strong> are kept for as long as tax and
            accounting laws require.
          </li>
        </ul>
        <p>
          When a Client closes their account, we delete or anonymise their
          contact lists and Platform Data within a reasonable period, except
          where the law requires us to keep it longer.
        </p>
      </>
    ),
  },
  {
    id: "security",
    title: "Data Security",
    content: (
      <>
        <p>
          We use reasonable technical and organisational safeguards to protect
          personal data, including:
        </p>
        <ul>
          <li>Encryption of data in transit (HTTPS/TLS).</li>
          <li>
            Role-based access controls, so only authorised staff can reach the
            data they need for their work.
          </li>
          <li>Secure cloud hosting, monitoring and regular backups.</li>
          <li>Separation of each Client&apos;s data from other Clients.</li>
        </ul>
        <p>
          No method of transmission or storage is completely secure. If a data
          breach affects your personal data, we will notify the affected
          Clients and the relevant authorities as required by law.
        </p>
      </>
    ),
  },
  {
    id: "your-rights",
    title: "Your Rights & Choices",
    content: (
      <>
        <p>
          Depending on where you live, including under India&apos;s Digital
          Personal Data Protection Act, 2023, you may have the right to:
        </p>
        <ul>
          <li>Access the personal data we hold about you.</li>
          <li>Correct inaccurate or incomplete data.</li>
          <li>Request that we delete your data.</li>
          <li>Withdraw your consent at any time.</li>
          <li>Nominate another person to exercise your rights.</li>
          <li>Raise a grievance with us, and then with the relevant authority.</li>
        </ul>
        <p>
          <strong>Stop receiving WhatsApp messages:</strong> Reply{" "}
          <strong>STOP</strong> to the message, use the opt-out button where one
          is shown, or block the business in WhatsApp.
        </p>
        <p>
          To exercise any of these rights, email us at{" "}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. We may need
          to verify your identity before we act on a request.
        </p>
      </>
    ),
  },
  {
    id: "data-deletion",
    title: "Data Deletion Requests",
    content: (
      <>
        <p>You can ask us to delete your data at any time:</p>
        <ol>
          <li>
            Email <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> with
            the subject line &quot;<strong>Data Deletion Request</strong>
            &quot;.
          </li>
          <li>
            Include the phone number or email address linked to your data and,
            if you know it, the name of the business that messaged you.
          </li>
          <li>
            We will confirm we have received your request and complete it
            within 30 days, unless the law requires us to keep certain records.
          </li>
        </ol>
        <p>
          Clients can also delete contacts, campaigns and their whole account
          from the dashboard settings, or by contacting our support team.
        </p>
      </>
    ),
  },
  {
    id: "cookies",
    title: "Cookies",
    content: (
      <p>
        We use essential cookies to run our website and dashboard, and
        analytics cookies to understand how they are used. You can block or
        delete cookies in your browser settings. Some features, such as
        staying signed in, may not work without them.
      </p>
    ),
  },
  {
    id: "transfers",
    title: "International Data Transfers",
    content: (
      <p>
        We are based in India. Our service providers, including Meta, may
        process data on servers in other countries. When data is transferred
        outside India, we take reasonable steps to protect it as this policy
        and applicable law require.
      </p>
    ),
  },
  {
    id: "children",
    title: "Children's Privacy",
    content: (
      <p>
        Our Services are meant for businesses and are not directed at
        children. We do not knowingly collect personal data from anyone under
        18. Clients must not use our platform to send marketing messages to
        children. If you believe a child&apos;s data has reached us, please
        contact us and we will delete it.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Changes to This Policy",
    content: (
      <p>
        We may update this Privacy Policy from time to time. When we do, we
        will change the &quot;Last updated&quot; date at the top of this page.
        If the changes are significant, we will also notify Clients by email
        or through the dashboard. Continuing to use the Services after an
        update means you accept the revised policy.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact & Grievance Officer",
    content: (
      <>
        <p>
          If you have questions or concerns about this policy or your data,
          please contact our Grievance Officer:
        </p>
        <div className="privacy-contact-card">
          <div className="privacy-contact-item">
            <FaUserShield />
            <div>
              <span>Grievance Officer</span>
              <p>Digi1xprt</p>
            </div>
          </div>
          <div className="privacy-contact-item">
            <FaEnvelope />
            <div>
              <span>Email</span>
              <p>
                <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
              </p>
            </div>
          </div>
          <div className="privacy-contact-item">
            <FaMapMarkerAlt />
            <div>
              <span>Registered Office</span>
              <p>21/44 Basement, Old Rajender Nagar, Delhi, India - 110060</p>
            </div>
          </div>
        </div>
        <p>
          We aim to acknowledge complaints within 48 hours and resolve them
          within 30 days.
        </p>
      </>
    ),
  },
];

const PrivacyPolicyArea = () => {
  return (
    <>
      {/* ================== Privacy Policy Start ==================*/}
      <div className="privacy-policy-area pd-top-120 pd-bottom-120">
        <div className="container">
          <div className="privacy-intro-card">
            <div className="privacy-intro-icon">
              <FaWhatsapp />
            </div>
            <div>
              <h6 className="sub-title">YOUR PRIVACY MATTERS</h6>
              <h2 className="title">Privacy Policy</h2>
              <p className="mb-0">
                How Digi1xprt collects, uses and protects data on our WhatsApp
                marketing and engagement platform.
              </p>
              <span className="privacy-updated">
                Last updated: {LAST_UPDATED}
              </span>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 order-lg-1 order-2">
              <aside className="privacy-toc">
                <h5>On this page</h5>
                <ul>
                  {sections.map((section, index) => (
                    <li key={section.id}>
                      <a href={`#${section.id}`}>
                        <span>{String(index + 1).padStart(2, "0")}</span>
                        {section.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </aside>
            </div>
            <div className="col-lg-8 order-lg-2 order-1">
              <div className="privacy-content">
                {sections.map((section, index) => (
                  <section
                    key={section.id}
                    id={section.id}
                    className="privacy-section"
                  >
                    <h3>
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      {section.title}
                    </h3>
                    {section.content}
                  </section>
                ))}
                <p className="privacy-footer-note">
                  See also our <Link href="/contact">Contact page</Link> for
                  other ways to reach us.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ================== Privacy Policy End ==================*/}
    </>
  );
};

export default PrivacyPolicyArea;
