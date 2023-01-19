import { component$ } from '@builder.io/qwik';
import { useDocumentHead, useLocation } from '@builder.io/qwik-city';

export const RouterHead = component$(() => {
  const head = useDocumentHead();
  const loc = useLocation();

  return (
    <>
      <title>{'Qwik GitHub Emoji Finder: ' + head.title}</title>

      <link rel="canonical" href={loc.href}/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

      <link rel="icon" type="image/png" href="https://github.githubassets.com/images/modules/site/icons/footer/github-mark.svg"/>

      {head.meta.map((m: any) => (<meta {...m} />))}

      {head.links.map((l: any) => (<link {...l} />))}

      {head.styles.map((s) => (
        <style {...s.props} dangerouslySetInnerHTML={s.style}/>
      ))}
    </>
  );
});
