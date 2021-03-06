import colors from "../../styles/colors";

import TextSubheader from "../text/TextSubheader";
import TextStd from "../text/TextStd";

interface TableCell {
  elidible?: boolean;
  v: string;
}

interface TableRow {
  cells: TableCell[];
}

interface Props {
  headers: TableRow;
  rows: TableRow[];
}

const Table = ({ headers, rows }: Props) => (
  <div className="container">
    <table className="table sticky">
      <thead className="sticky">
        <tr className="sticky">
          {headers.cells.map(cell => (
            <th className={`header-cell sticky ${cell.elidible ? "hide-on-small" : ""}`} key={`header${cell.v}`}>
              <TextSubheader>{cell.v}</TextSubheader>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, ir) => (
          <tr key={`row${ir}tr`}>
            {row.cells.map((cell, ic) => (
              <td className={`data-cell ${cell.elidible ? "hide-on-small" : ""}`} key={`cell${ir}${ic}`}>
                <TextStd>{cell.v}</TextStd>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
    <style jsx>{`
      .container {
        max-height: 65vh;
        overflow-y: auto;
        scrollbar-color: ${colors.deemphasizeMajor} ${colors.background};
      }
      .table {
        border-spacing: 8px;
        width: 100%;
      }
      .header-cell {
        border-bottom: 1px solid ${colors.secondary};
        height: 40px;
        padding-right: 64px;
        text-align: left;
      }
      .data-cell {
        border-bottom: 1px solid ${colors.deemphasizeMajor};
        padding-right: 64px;
      }
      .sticky {
        background-color: ${colors.background};
        position: sticky;
        top: 0px;
      }
      .hide-on-small {}
      @media only screen and (max-width: 600px) {
        .hide-on-small {
          display: none;
        }
      }
    `}</style>
  </div>
);

export default Table;
