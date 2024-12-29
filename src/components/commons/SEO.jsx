import React from 'react';

import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';

const SEO = ({
  title,
  description,
  keywords,
  image,
  url,
  type = 'website',
  jsonLd,
}) => {
  return (
    <>
      <Helmet>
        {/* Basic Meta */}
        {title && <title>{title}</title>}
        {description && <meta content={description} name="description" />}
        {keywords && <meta content={keywords} name="keywords" />}

        {/* Open Graph / Social Media */}
        <meta content={title || 'Exclusive'} property="og:title" />
        <meta content={description} property="og:description" />
        <meta content={image || '/favicon.ico'} property="og:image" />
        <meta content={type} property="og:type" />
        <meta content={url || window.location.href} property="og:url" />
        <meta content="summary_large_image" name="twitter:card" />
        <meta content={title} name="twitter:title" />
        <meta content={description} name="twitter:description" />
        <meta content={image || '/favicon.jpg'} name="twitter:image" />

        {/* JSON-LD */}
        {jsonLd && (
          <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
        )}
      </Helmet>
    </>
  );
};

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
  image: PropTypes.string,
  url: PropTypes.string,
  type: PropTypes.string,
  jsonLd: PropTypes.object,
};

export default SEO;
