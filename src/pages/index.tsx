/* eslint-disable no-restricted-globals */
/* eslint-disable no-shadow */
import React, { lazy, useState, useEffect, Suspense } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import Loaders from '../components/Loaders';
import PageTemplate from '../components/templates/PageTemplate';
import pages from '../nav.json';

const importView = (file: string) =>
  // eslint-disable-next-line no-console
  lazy(() =>
    import(`./${file}`).catch((err) =>
      console.log(`Error in importing ${file}`, { err })
    )
  );

export default function Index() {
  const Navigate = useNavigate();
  const { view, child } = useParams();
  const metaViewData = pages;
  const [selectedView, setSelectedView] = useState<any[]>([]);
  async function loadView(filtered: any) {
    const promise = filtered.map(async (_view: any) => {
      const View = await importView(_view.file);
      // eslint-disable-next-line no-use-before-define
      return <View key={_view.id} selectView={selectView} />;
    });
    Promise.all(promise).then(setSelectedView);
  }
  async function selectView(file: string | undefined) {
    const filtered = metaViewData.filter((elem) => elem.file === file);
    loadView([filtered[0]]);
  }
  useEffect(() => {
    let fileToLoad = view;
    if (child) {
      if (view === 'products') {
        fileToLoad = 'product-details';
      } else {
        fileToLoad = child;
      }
    }
    if (child) {
      if (view === 'products') {
        Navigate(`/products/${child}`);
      } else {
        Navigate(`/${view}/${child}`);
      }
    } else {
      Navigate(`/${fileToLoad}`);
    }
    selectView(fileToLoad);
  }, [view, child]);

  return (
    <>
      {/* {loading_user ? (
        <Loaders pageLoader />
      ) : ( */}
      <PageTemplate
      //   title={view}
      //   showTemplate={
      //     metaViewData?.filter((elem) => elem.file === view)[0]?.navigations
      //   }
      >
        <Suspense fallback={<Loaders />}>{selectedView}</Suspense>
      </PageTemplate>
      {/* )} */}
    </>
  );
}
