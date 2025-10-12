import { PageHeading } from '@/components/page-heading';
import { PageInfoContainer } from '@/components/page-info-container';

export default function FeedbackPage() {
  return (
    <div>
      <PageHeading title="Feedback" />
      <PageInfoContainer>
        <div className="space-y-2">
          <h4 className="text-lg font-semibold">
            AMSA Captains, Players & Supporters:
          </h4>

          <ul className="pl-2 space-y-4">
            <li>
              Please send us feedback on any aspect of your game day experience
              to{' '}
              <a
                href="mailto:matchcomments@austinmenssoccer.com"
                className="underline underline-offset-4 text-blue-500"
              >
                matchcomments@austinmenssoccer.com
              </a>
              .
            </li>
            <li>
              When you send feedback, please include the team you represent and
              the time and place of the game in question. Feel free to include
              any details you feel are relevant. And remember, positive comments
              are just as valuable as negative comments, so don&apos;t wait
              until you have a bad experience before you give us your thoughts.
            </li>
            <li>
              We cannot guarantee that you will receive a reply to your
              comments, but every single comment will be read, taken note of,
              and where possible will be used to try to improve things.
            </li>
          </ul>
        </div>
      </PageInfoContainer>
    </div>
  );
}
