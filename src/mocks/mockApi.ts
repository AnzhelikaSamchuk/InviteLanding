import {
  aboutUs,
  additionalInformation,
  conference,
  createdEntity,
  emptyList,
  footers,
  galleries,
  keySpeakers,
  lectures,
  list,
  navigations,
  partners,
  performances,
  successDialogs,
  tariffs,
} from './mockData';

const registered = {
  participants: new Set<string>(),
  speakers: new Set<string>(),
  corporate: new Set<string>(),
};

const emailFromQuery = (url: string) => {
  const params = new URLSearchParams(url.split('?')[1] ?? '');
  return (params.get('filters[email][$eq]') ?? '').trim().toLowerCase();
};

const emailFromBody = (body?: { data?: { email?: string } }) => (body?.data?.email ?? '').trim().toLowerCase();

const byEmail = (email: string, bucket: Set<string>) => {
  if (email && bucket.has(email)) {
    return list([{ id: 1, attributes: { email } }]);
  }

  return emptyList();
};

export const resolveMockRequest = async <T>(url: string, method: string, body?: { data?: { email?: string } }): Promise<T> => {
  await new Promise((resolve) => setTimeout(resolve, 180));

  const path = url.split('?')[0];
  const verb = method.toLowerCase();

  if (verb === 'get') {
    if (path === '/current-conferences') return conference as T;
    if (path === '/pages-contents') return navigations as T;
    if (path === '/about-uses') return aboutUs as T;
    if (path === '/additional-informations') return additionalInformation as T;
    if (path === '/galleries') return galleries as T;
    if (path === '/partners') return partners as T;
    if (path === '/performances') return performances as T;
    if (path === '/footers') return footers as T;
    if (path === '/success-dialogs') return successDialogs as T;
    if (path === '/tariffs') return tariffs as T;
    if (path === '/lectures') return lectures as T;
    if (path === '/key-speakers') return keySpeakers as T;
    if (path === '/participants') return byEmail(emailFromQuery(url), registered.participants) as T;
    if (path === '/pre-speakers') return byEmail(emailFromQuery(url), registered.speakers) as T;
    if (path === '/corporate-participants') return byEmail(emailFromQuery(url), registered.corporate) as T;

    return emptyList() as T;
  }

  if (verb === 'post') {
    const email = emailFromBody(body);

    if (path.startsWith('/participants')) {
      if (email) registered.participants.add(email);
      return createdEntity(body) as T;
    }

    if (path.startsWith('/pre-speakers')) {
      if (email) registered.speakers.add(email);
      return undefined as T;
    }

    if (path.startsWith('/corporate-participants')) {
      if (email) registered.corporate.add(email);
      return undefined as T;
    }
  }

  return undefined as T;
};
