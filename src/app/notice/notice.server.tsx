import { getNotice, noticeQueryKeys } from "@/api/querys/NOTICE_QUERY";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import Notices from "./page";

export default async function NoticePage() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: noticeQueryKeys.notices(),
    queryFn: () => getNotice(),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Notices />
    </HydrationBoundary>
  );
}

export async function generateStaticParams() {
  const notice = await getNotice({ page_size: 10, page: 1 });

  const data = notice?.results || [];

  return data.map((notice) => ({ id: notice.id }));
}
