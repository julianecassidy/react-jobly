import { convertAndFormat } from "../helperFuncs";

/** Component for JObCard
 *  Renders a card with job details
 * 
 *  props: job {jobData}
 * 
 *  state: none
 *  
 * links to: none
 * 
 * JobCardList -> JobCard
 */

function JobCard({ job }) {
    console.debug("JobCard");

    const salary = convertAndFormat(job.salary);

    return (
        <div className="JobCard">
            <h1>{job.title}</h1>
            <h2>{job.companyName}</h2>

            <div>
                {"salary" in job && (
                    <div>
                        Salary: 
                        ${salary}
                    </div>
                )}

                <div>
                    {"equity" in job && (
                        <div>
                            Equity: {job.equity}
                        </div>
                    )}
                </div>
            </div>

        </div>
    );
}

export default JobCard;