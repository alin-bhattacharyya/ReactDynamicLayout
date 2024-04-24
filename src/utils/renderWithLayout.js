import React from 'react';
const renderWithLayout = (config, Component) => {
 const { layout, props } = config;
 const Layout = React.lazy(() => import(`../layouts/${layout}`));
 
 return (
   <React.Suspense fallback={<div>Loading...</div>}>
     <Layout title={props.title}>
       <Component {...props} />
       {props.children}
     </Layout>
   </React.Suspense>
 );
};
 
export default renderWithLayout;