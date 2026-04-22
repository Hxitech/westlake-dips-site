import { ButtonLink } from "@/components/ui/button-link";
import { T } from "@/components/ui/t";

export default function NotFound() {
  return (
    <section className="container-shell flex min-h-[70vh] items-center py-20">
      <div className="panel max-w-3xl rounded-[2.5rem] p-8 sm:p-12">
        <div className="text-kicker text-blue-600">
          404
        </div>
        <h1 className="text-display mt-4 font-serif text-gray-900">
          <T zh="页面不存在" en="Page Not Found" />
        </h1>
        <p className="text-body-copy mt-5 text-gray-500">
          <T
            zh="该内容可能尚未发布，或链接已经变更。您可以返回首页或查看最新通知。"
            en="This page may not have been published yet or the link has changed. Return to the homepage or check the latest announcements."
          />
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <ButtonLink href="/">
            <T zh="返回首页" en="Back to Home" />
          </ButtonLink>
          <ButtonLink href="/announcements" variant="secondary">
            <T zh="查看通知" en="View News" />
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
