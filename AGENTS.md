<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Project rules
- Business details, products and contact placeholders live in src/lib/site.ts; edit there so all pages update together.
- Page sections are shared components in src/components/site/Sections.tsx; the enquiry form posts through the submitEnquiry stub in QuoteForm.tsx, which is where a backend gets plugged in later.
