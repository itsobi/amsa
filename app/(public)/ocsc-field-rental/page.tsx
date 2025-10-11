import { PageHeading } from '@/components/page-heading';
import { PageInfoContainer } from '@/components/page-info-container';

function RentalFee({ heading, text }: { heading: string; text: string }) {
  return (
    <div className="space-y-2">
      <h4 className="font-semibold">{heading}</h4>
      <p className="pl-2">{text}</p>
    </div>
  );
}

export default function OCSCFieldRentalPage() {
  return (
    <>
      <PageHeading title="OCSC Field Rental" />
      <PageInfoContainer>
        <p>
          If you are interested in renting a field at the Onion Creek Soccer
          Complex (OCSC), please send an email to the AMSA Administrator, Robert
          S. at{' '}
          <a
            href="mailto:admin@austinmenssoccer.com"
            className="underline underline-offset-4 text-blue-500"
          >
            admin@austinmenssoccer.com
          </a>
          , with the following information:
        </p>

        <ul className="list-inside space-y-4 pl-2">
          <li>- Name of group wanting to rent fields.</li>
          <li>
            - Name of group&apos;s contact person and contact information,
            including billing address.
          </li>
          <li>- The date you want to rent the fieldNumber of fields needed.</li>
          <li>
            - Date(s) that fields are needed – NOTE: Fields are generally only
            available for rental on Saturdays.
          </li>
          <li>- Sport and type of event (e.g., league play or tournament).</li>
          <li>- Estimated number of participants/attendees.</li>
        </ul>

        <p className="font-semibold">PLEASE NOTE THE FOLLOWING:</p>
        <ul className="list-inside space-y-4 pl-2">
          <li>
            - The fields cannot be rented or used for baseball, softball,
            kickball, rugby, American football, or concerts, due to the
            potential for damage to the grass.
          </li>
          <li>
            - Hitting golf balls, paragliding, the use of metal detectors, and
            flying of remote-control aircraft (including drones) are not allowed
            at OCSC, per City of Austin Park Rules.
          </li>
          <li>
            - The fields cannot be rented or used for practice/training
            sessions.
          </li>
          <li>- The fields are only available for use from 8 AM to 6 PM.</li>
          <li>
            - OCSC is closed each season for winter break (late November/early
            December) through early-February, while the grass is in dormancy and
            then in its early growing stage. Fields cannot be rented during this
            period.
          </li>
          <li>
            - Field rental payments must be made by check, cashiers check, or
            money order.
          </li>
        </ul>

        <RentalFee
          heading="Regular Field Rental: $350 per field/per day"
          text="This rental amount applies to non-income-generating regular youth or adult regular season games, playoffs, or friendlies. Typically, these rental opportunities are for Saturday play when the complex isn’t closed (1) for maintenance or (2) to protect the fields."
        />
        <RentalFee
          heading="Tournament Field Rental: $825 per field/per day"
          text="This rental amount applies to tournaments or other special events. Typically, the complex is available for income-generating field rental during long holiday weekends (e.g., Easter, Memorial Day, Fourth of July, Labor Day, Thanksgiving) but not during off-season (see above)."
        />
        <RentalFee
          heading="Summer Camp Field Rental: $200/field/per 4 hours or $300/field/per day"
          text="This rental amount applies to summer soccer camps and any other summer weekday uses. This type of rental is the exception of Provision 3 below in that fewer than four fields can be rented for this purpose during summer weekdays. If fewer than 4 fields are rented then there is an additional $100 setup fee to open the complex and setup the facility for the day. The $100 setup fee is per day."
        />
        <RentalFee
          heading="Miscellaneous Field Preparation Fee: Price quoted per application"
          text="This fee shall be assessed at the renter’s request to have the AMSA field operator set up benches and transport teams’ equipment and supplies to and from the fields. This is necessary to prevent unauthorized vehicles from driving into the field area."
        />
        <RentalFee
          heading="Alternate Field Lining/Goal Displacement Fee: Price quoted per application"
          text="Other non-soccer sports such as Aussie Rules Football, Flag Football, Ultimate Frisbee, Hurling, and Gaelic Football require specific dimensions for a regulation field. Temporary lines can only be established by the AMSA field operator. The event could require the goals to be displaced as well. A quote will include amounts to re-line the fields and/or return goals for their original intent. The provided quote will be specific to the rental agreement. At a minimum this fee starts at $500."
        />

        <ol className="list-decimal list-inside space-y-4 pl-2">
          <li>
            <span className="font-semibold">In General:</span> All rental fees
            are turn-key, including the cost of opening and closing the complex,
            putting up nets and flags, and putting out and collecting garbage
            cans at each rented field. Use of the fields is governed by the AMSA
            Onion Creek Soccer Complex Field Use Policy.
          </li>
          <li>
            <span className="font-semibold">Priority of Use:</span> The
            “Priority of Use” section of the AMSA Onion Creek Soccer Complex
            Field Use Policy determines the priority order of which groups can
            rent the fields (see above).
          </li>
          <li>
            <span className="font-semibold">Minimum Use Requirement:</span>{' '}
            Because of the cost involved in opening and closing the complex and
            potential security problems, AMSA will not open the complex for
            field rental of fewer than four fields on a given day; however, AMSA
            will rent out available individual fields when other groups are
            renting fields at the complex (for example, on Saturdays when the
            Austin Co-Ed Soccer Association is playing).
          </li>
          <li>
            <span>Advance Payment:</span> The entire rental fee must be paid at
            the time of reservation. However, if the entire complex is rented,
            only 50% of the rent must be paid at the time of the reservation. A
            field reservation will not be made until such payment has been
            received by AMSA.
          </li>
          <li>
            <span className="font-semibold">
              Refund of Rent Upon Cancellation:
            </span>{' '}
            In the event of cancellation, AMSA reserves the right to withhold a
            percentage of the rent, depending upon the number of days prior to
            the date of use, as follows:
            <ul className="list-inside space-y-4 pl-2 mt-2">
              <li>
                - If cancellation is made more than 30 days in advance: 20% of
                rent will be withheld
              </li>
              <li>
                - If cancellation is made 15-30 days in advance: 50% of rent
                will be withheld
              </li>
              <li>
                - If cancellation is made fewer than 15 days in advance: 100% of
                rent will be withheld
              </li>
              <li>
                - Notwithstanding the foregoing, is AMSA is able to collect the
                same amount of rent from another user for the same time-period
                for which the field were originally rented, AMSA may choose to
                refund all but 20% of the rent.
              </li>
              <li>
                - In addition, AMSA reserves the right to issue a credit for
                future rent, in an amount depending upon the date of
                cancellation as provided above.
              </li>
              <li>
                - AMSA may withhold 20% of the rent in any event to cover the
                administrative cost of the reservation and cancellation process.
              </li>
            </ul>
          </li>
          <li>
            <span className="font-semibold">Cancellation Due to Rain-out:</span>{' '}
            In the event of rain or other conditions of any kind which make the
            fields unfit for use, or in the event that AMSA concludes that there
            is a credible prediction of same
            <ul className="list-inside space-y-4 pl-2 mt-2">
              <li>
                - AMSA reserves the right to cancel reservations, in which case
                AMSA will refund the entire rent or issue a credit for future
                rent; or
              </li>
              <li>
                - The lessee-organization may cancel the reservation, subject to
                AMSA&apos;s approval, which shall not be reasonably withheld.
              </li>
              <li>
                - In such an event, AMSA shall either refund the entire payment
                or issue a credit for the same, as may be requested by the
                lessee.
              </li>
            </ul>
          </li>
          <li>
            <span className="font-semibold">
              Limitation of Fields for Youth Play:
            </span>{' '}
            Because the number of people and therefore vehicles for youth games
            is almost double that of adult games, AMSA reserves the right to
            limit the number of fields it rents for youth tournaments and league
            play.
          </li>
          <li>
            <span className="font-semibold">No Practice:</span> Fields cannot be
            rented for practice either by AMSA teams or other individuals and
            organizations.
          </li>
          <li>
            <span className="font-semibold">Damage to Fields:</span> The field
            rental deposit will be forfeited in full if any parties associated
            with the Lessee are found to have damaged the field in any way,
            moved the goals, and/or are found to have driven unauthorized
            vehicles onto the field area (including the pathways next to the
            fields). AMSA may deduct such additional fees from any advance
            rental payments made by the offending party for future reservations.
          </li>
        </ol>
      </PageInfoContainer>
    </>
  );
}
