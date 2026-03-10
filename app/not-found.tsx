import { ButtonLink } from "@/components/ui/button-link";

export default function NotFound() {
  return (
    <section className="container-shell flex min-h-[70vh] items-center py-20">
      <div className="panel max-w-3xl rounded-[2.5rem] p-8 sm:p-12">
        <div className="text-[0.68rem] uppercase tracking-[0.28em] text-cyan-200/88">
          404
        </div>
        <h1 className="mt-4 font-serif text-4xl text-white sm:text-5xl">
          页面不存在
        </h1>
        <p className="mt-5 text-base leading-8 text-slate-300/82 sm:text-lg">
          该内容可能尚未发布，或链接已经变更。你可以返回首页，或者直接进入通知与报名说明页面。
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <ButtonLink href="/">返回首页</ButtonLink>
          <ButtonLink href="/announcements" variant="secondary">
            查看通知
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
