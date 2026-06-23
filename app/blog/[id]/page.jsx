import Image from "next/image";
import Script from "next/script";
//Import Css
import styles from "../../_components/Blog/Singlepost.module.css";
import styles2 from "../../_components/Blog/Blog.module.css";
//Import Sections
import PageTitle from "../../_components/Common/PageTitle";
import Socials from "../../_components/Common/Socials";
import AdminInfo from "../../_components/Blog/AdminInfo";
import NavPostsBtn from "../../_components/Blog/NavPostsBtn";
import PostSlider from "../../_components/Blog/PostSlider";
//Import Database
import { posts } from "../data/blog_data";

// Generate static params for all blog posts
export function generateStaticParams() {
  return posts.map((post) => ({
    id: post.id.toString(),
  }));
}

// Generate dynamic metadata for each blog post (2026 Google SEO compliance)
export async function generateMetadata({ params }) {
  const { id } = await params;
  const postData = posts.find((post) => post.id == id);
  
  if (!postData) {
    return {
      title: "Blog Post Not Found",
      description: "The blog post you're looking for doesn't exist.",
    };
  }

  const postUrl = `https://gasheaterservicemelbourne.com.au/blog/${id}/`;
  
  return {
    title: `${postData.title} | Gas Heater Service Melbourne Blog`,
    description: postData.description || "Read our expert blog post on gas heater services, maintenance, and repair solutions.",
    keywords: `${postData.tag}, gas heater service, heating repair, ${postData.category}`,
    authors: [{ name: "Gas Heater Service Melbourne Team" }],
    openGraph: {
      title: postData.title,
      description: postData.description,
      url: postUrl,
      type: "article",
      publishedTime: `${postData.time__posting__year}-${String(postData.time__posting__month).padStart(2, '0')}-${String(postData.time__posting__day).padStart(2, '0')}`,
      images: [
        {
          url: postData.img || "/images/blog/default-post.jpg",
          width: 1200,
          height: 630,
          alt: postData.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: postData.title,
      description: postData.description,
      image: postData.img || "/images/blog/default-post.jpg",
    },
    alternates: {
      canonical: postUrl,
    },
  };
}

//Page Layout
export default async function SinglePost({ params }) {
  const { id } = await params;
  const postData = posts.find((post) => post.id == id);
  
  // Generate Article Schema for Google (2026 SEO compliance)
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: postData.title,
    description: postData.description,
    image: [postData.img || "/images/blog/default-post.jpg"],
    datePublished: `${postData.time__posting__year}-${String(postData.time__posting__month).padStart(2, '0')}-${String(postData.time__posting__day).padStart(2, '0')}`,
    dateModified: `${postData.time__posting__year}-${String(postData.time__posting__month).padStart(2, '0')}-${String(postData.time__posting__day).padStart(2, '0')}`,
    author: {
      "@type": "Organization",
      name: "Gas Heater Service Melbourne",
      url: "https://gasheaterservicemelbourne.com.au"
    },
    publisher: {
      "@type": "Organization",
      name: "Gas Heater Service Melbourne",
      logo: {
        "@type": "ImageObject",
        url: "https://gasheaterservicemelbourne.com.au/logo.png",
        width: 250,
        height: 60
      }
    }
  };
  
  return (
    <>
      <Script
        id={`blog-article-schema-${id}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        strategy="beforeInteractive"
      />
      <PageTitle
        dataSubTitle={`Blog`}
        dataSubTitleSrc={`/blog`}
        dataTitle={`${postData.title}`}
      />
      <main id="tt-pageContent">
        <div className="section__inner">
          <div className={`container container__fluid-xl`}>
            <div className="md:flex md:items-start">
              <div
                className={`${styles2.holder__colleft} ${styles.colInnerBox}`}
              >
                <div className={`${styles.singlepost} relative`}>
                  {postData.img ? (
                    <div
                      className={`${styles.singlepost__img} relative overflow-hidden`}
                    >
                      <Image
                        src="/images/about_img01.jpg"
                        width="780"
                        height="449"
                        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQ4AAAFUAQMAAADvakB3AAAAA1BMVEUAAACnej3aAAAAAXRSTlMAQObYZgAAACJJREFUaN7twYEAAAAAw6D7Ux9hAtUAAAAAAAAAAAAAACAcLnwAAWOAc2cAAAAASUVORK5CYII="
                        
                        style={{ objectFit: "cover" }}
                        alt={postData.title}
                      />
                    </div>
                  ) : null}
                  <PostSlider postData={postData} />
                  <div className={`${styles.singlepost__cont}`}>
                    <div className="singlepost__data">
                      {postData.time__posting}
                    </div>
                    {postData.title ? (
                      <h2 className={`${styles.singlepost__title}`}>
                        {postData.title}
                      </h2>
                    ) : null}
                    {postData.description ? (
                      <p>{postData.description}</p>
                    ) : null}
                    {postData.blockquote__text ? (
                      <blockquote
                        className={`${styles.blockquote} ${styles.blockquote__top} relative`}
                      >
                        <div
                          className={`${styles.blockquote__line} ${styles.blockquote__inner} relative`}
                        >
                          {postData.blockquote__text ? (
                            <p>{postData.blockquote__text}</p>
                          ) : null}
                          {postData.blockquote__title ? (
                            <p className={`indent__top`}>
                              <strong className="base__color">
                                - {postData.blockquote__title},{" "}
                              </strong>
                              <span className="text-sm">
                                {postData.blockquote__subtitle}
                              </span>
                            </p>
                          ) : null}
                        </div>
                      </blockquote>
                    ) : null}
                    {postData.additionaLayout?.map((item, index) => (
                      <div key={index}>
                        {item.title ? (
                          <h5 className="ttsubtitle ttsubtitle__top">
                            {item.title}
                          </h5>
                        ) : null}
                        {item.text ? <p>{item.text}</p> : null}
                        {item.text2 ? <p>{item.text2}</p> : null}
                      </div>
                    ))}
                  </div>
                </div>
                <NavPostsBtn postId={id} />
              </div>
              <div
                className={`${styles2.holder__colright} ${styles.holder__colright} sticky`}
              >
                <AdminInfo postData={postData} />
                <div className={`${styles.singlepost__meta} flex`}>
                  <Socials />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
