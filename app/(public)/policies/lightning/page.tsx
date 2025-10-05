import { PageHeading } from '@/components/page-heading';
import { PageInfoContainer } from '@/components/page-info-container';

export default function LightningPolicyPage() {
  return (
    <>
      <PageHeading title="Lightning Policy" />
      <PageInfoContainer>
        <div className="space-y-6">
          <p>
            Lightning can strike quickly and unexpectedly, and it can be deadly.
            This policy must be taken seriously and followed carefully.
          </p>

          <div className="space-y-6">
            <h6 className="font-semibold">When to Act</h6>
            <p>Take safety precautions immediately if:</p>
            <ul className="pl-2 space-y-6 list-disc list-inside">
              <li>Lightning is visible</li>
              <li>
                Lightning is detected within ten (10) miles by means of a
                technological device.
              </li>
              <li>
                If you can hear thunder, lighting may be within range. Be
                watchful for lightning. If thunder becomes louder, leave the
                field.
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h6 className="font-semibold">Decision Makers</h6>
            <ul className="pl-2 space-y-6 list-disc list-inside">
              <li>
                The Referee Coordinator (or, in his absence, any Referee) or the
                AMSA President or Field Commissioner shall have the authority
                and responsibility to suspend play and implement the policy, and
                to determine whether and when to resume play.
              </li>

              <li>
                If thunder is detected, the Decision Maker shall attempt to
                determine whether lightning is in the vicinity, and if so, how
                far away, utilizing any available technological device which is
                capable of detecting lightning, including cell phone weather
                apps. If lightning is detected within ten (10) miles, he shall
                promptly implement the Safety Precautions set out below.
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h6 className="font-semibold">Safety Precautions</h6>
            <ul className="pl-2 space-y-6 list-disc list-inside">
              <li>Leave the field immediately.</li>

              <li>
                Seek shelter in your vehicle, if you are at Onion Creek Soccer
                Complex (OCSC).
              </li>
              <li>
                Seek shelter in your vehicle or in any nearby buildings if
                available.
              </li>
              <li>
                Do not seek shelter in trees or near any metal objects (other
                than your vehicle).
              </li>
              <li>Avoid high ground and water.</li>
            </ul>
          </div>

          <div className="space-y-6">
            <h6 className="font-semibold">Resuming Play</h6>
            <ul className="pl-2 space-y-6 list-disc list-inside">
              <li>
                Play may be resumed if it is clear that no lightning has been
                detected for twenty (20) minutes after the most recent
                detection.
              </li>

              <li>
                Play shall be extended to the end of the scheduled time-slot,
                but not beyond.
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h6 className="font-semibold">First Aid</h6>
            <ul className="pl-2 space-y-6 list-disc list-inside">
              <li>
                Lightning victims need immediate attention. Call 911 or EMS
                immediately. Administer first aid immediately if you are
                qualified to do so. Lightning victims do not carry an electrical
                charge and are safe to treat.
              </li>
            </ul>
          </div>

          <p className="italic text-center">
            By way of example, a 4:00 o&apos;clock match shall be extended to
            6:00 o&apos;clock, daylight permitting, but may not be extended
            beyond 6:00.
          </p>
        </div>
      </PageInfoContainer>
    </>
  );
}
