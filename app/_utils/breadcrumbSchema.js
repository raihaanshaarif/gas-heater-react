/**
 * BreadcrumbList Schema Generator
 * Generates appropriate BreadcrumbList schema.org markup for all page types
 * Follows Google 2026 SEO guidelines
 */

/**
 * Generate BreadcrumbList schema for a given page path
 * @param {string} currentPath - Current page path (e.g., '/coverage/brighton/', '/blog/1/', etc.)
 * @param {string} title - Current page title
 * @returns {object} BreadcrumbList schema
 */
export function generateBreadcrumbSchema(currentPath, title) {
  const baseUrl = "https://gasheaterservicemelbourne.com.au";
  const breadcrumbs = [];
  
  // Always add home
  breadcrumbs.push({
    "@type": "ListItem",
    position: 1,
    name: "Home",
    item: baseUrl
  });
  
  const pathParts = currentPath.split('/').filter(p => p);
  
  // Coverage/Suburb pages: / > Coverage > Suburb Name
  if (currentPath.startsWith('/coverage/')) {
    breadcrumbs.push({
      "@type": "ListItem",
      position: 2,
      name: "Service Areas",
      item: `${baseUrl}/coverage/`
    });
    
    if (pathParts[1]) {
      const suburbSlug = pathParts[1];
      const suburbName = suburbSlug
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      
      breadcrumbs.push({
        "@type": "ListItem",
        position: 3,
        name: suburbName,
        item: `${baseUrl}/coverage/${suburbSlug}/`
      });
    }
  }
  
  // Blog pages: / > Blog > Post Title
  else if (currentPath.startsWith('/blog/')) {
    breadcrumbs.push({
      "@type": "ListItem",
      position: 2,
      name: "Blog",
      item: `${baseUrl}/blog/`
    });
    
    if (pathParts[1] && isNaN(pathParts[1])) {
      breadcrumbs.push({
        "@type": "ListItem",
        position: 3,
        name: title,
        item: currentPath
      });
    }
  }
  
  // Services pages: / > Services > [Category]
  else if (currentPath.startsWith('/services/')) {
    breadcrumbs.push({
      "@type": "ListItem",
      position: 2,
      name: "Services",
      item: `${baseUrl}/services/`
    });
    
    if (pathParts[1]) {
      const categorySlug = pathParts[1];
      const categoryName = categorySlug
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      
      breadcrumbs.push({
        "@type": "ListItem",
        position: 3,
        name: categoryName,
        item: `${baseUrl}/services/${categorySlug}/`
      });
    }
  }
  
  // Brands pages: / > Brands > Brand Name
  else if (currentPath.startsWith('/brands/')) {
    breadcrumbs.push({
      "@type": "ListItem",
      position: 2,
      name: "Brands",
      item: `${baseUrl}/brands/`
    });
    
    if (pathParts[1]) {
      const brandSlug = pathParts[1];
      const brandName = brandSlug
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      
      breadcrumbs.push({
        "@type": "ListItem",
        position: 3,
        name: brandName,
        item: `${baseUrl}/brands/${brandSlug}/`
      });
    }
  }
  
  // About, Contact, etc.
  else if (currentPath === '/about/') {
    breadcrumbs.push({
      "@type": "ListItem",
      position: 2,
      name: "About",
      item: `${baseUrl}/about/`
    });
  }
  
  else if (currentPath === '/contact-us/') {
    breadcrumbs.push({
      "@type": "ListItem",
      position: 2,
      name: "Contact Us",
      item: `${baseUrl}/contact-us/`
    });
  }
  
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs
  };
}

/**
 * Generate breadcrumb items for navigation
 * Returns array of {name, path} for rendering in UI
 */
export function generateBreadcrumbItems(currentPath) {
  const items = [{ name: "Home", path: "/" }];
  const pathParts = currentPath.split('/').filter(p => p);
  let currentUrl = "";
  
  if (currentPath.startsWith('/coverage/')) {
    items.push({ name: "Service Areas", path: "/coverage/" });
    if (pathParts[1]) {
      const suburbName = pathParts[1]
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      items.push({ name: suburbName, path: currentPath });
    }
  }
  
  else if (currentPath.startsWith('/blog/')) {
    items.push({ name: "Blog", path: "/blog/" });
  }
  
  else if (currentPath.startsWith('/services/')) {
    items.push({ name: "Services", path: "/services/" });
    if (pathParts[1]) {
      const categoryName = pathParts[1]
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      items.push({ name: categoryName, path: currentPath });
    }
  }
  
  else if (currentPath.startsWith('/brands/')) {
    items.push({ name: "Brands", path: "/brands/" });
    if (pathParts[1]) {
      const brandName = pathParts[1]
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      items.push({ name: brandName, path: currentPath });
    }
  }
  
  return items;
}
