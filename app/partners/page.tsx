import type { Metadata } from "next";

import { PageHero } from "@/components/ui/page-hero";
import { ButtonLink } from "@/components/ui/button-link";
import { T } from "@/components/ui/t";
import { partnerCollaborationAreas, partnerCollaborationNotes } from "@/content/data/partners";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "合作伙伴 | Partners",
  description: "Partnership opportunities and collaboration directions for the DIPS Summit.",
  path: "/partners",
});

export default function PartnersPage() {
  return (
    <>
      <PageHero
        description={
          <T
            zh="欢迎高校、医院、科研机构、企业、媒体与社会组织围绕学术交流、临床转化与生态共建开展合作。"
            en="Universities, hospitals, research institutes, enterprises, media, and social organizations are welcome to collaborate on academic exchange, clinical translation, and ecosystem building."
          />
        }
        eyebrow={<T zh="合作伙伴" en="Partners" />}
        meta={[
          <T key="a" zh="学术协同" en="Academic" />,
          <T key="c" zh="临床转化" en="Clinical" />,
          <T key="e" zh="生态共建" en="Ecosystem" />,
        ]}
        title={<T zh="共建峰会合作伙伴网络" en="Build the Summit Partnership Network" />}
      />
      <section className="container-shell pb-24 pt-18 sm:pb-28 sm:pt-20">
        <div className="grid gap-5 lg:grid-cols-3">
          {partnerCollaborationAreas.map((item, index) => (
            <div className="panel rounded-[2rem] p-6 sm:p-8" key={item.id}>
              <div className="text-[0.68rem] uppercase tracking-[0.28em] text-blue-600">
                0{index + 1}
              </div>
              <h2 className="mt-4 font-serif text-2xl text-gray-900 sm:text-3xl">
                <T zh={item.title} en={item.titleEn} />
              </h2>
              <p className="mt-4 text-sm leading-8 text-gray-500">
                <T zh={item.description} en={item.descriptionEn} />
              </p>
            </div>
          ))}
        </div>

        {/* Notes */}
        <div className="mt-8 space-y-3">
          {partnerCollaborationNotes.map((note) => (
            <div
              className="rounded-xl border border-slate-200 bg-slate-50 px-5 py-3.5 text-sm leading-6 text-slate-600"
              key={note.zh}
            >
              <T zh={note.zh} en={note.en} />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="panel mt-10 rounded-[2rem] p-6 sm:p-8">
          <div className="text-[0.68rem] uppercase tracking-[0.28em] text-blue-600">
            <T zh="合作咨询" en="Partnership Inquiry" />
          </div>
          <h2 className="mt-4 font-serif text-3xl text-gray-900">
            <T zh="联系会务组开启合作沟通" en="Contact the Organizing Committee to Start a Partnership" />
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-8 text-gray-500">
            <T
              zh="如有合作意向，欢迎联系组委会方老师（13277093146），我们将根据峰会主题与实际需求进一步沟通合作方式。"
              en="If you are interested in partnering with the summit, please contact Ms. Fang (13277093146). We will further discuss the collaboration format based on the summit's themes and practical needs."
            />
          </p>
          <ButtonLink className="mt-8" href="/contact">
            <T zh="联系会务组" en="Contact Us" />
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
