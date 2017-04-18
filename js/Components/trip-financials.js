/**
 * Created by Jeroen on 15/04/2017.
 */
Vue.component('trip-financials', {
    template: `
        <!-- trip-financials -->
        <div id="Financials" class="z-depth-1">
            <h5>Financials</h5>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "</p>
            <div class="tools">
                <ul>
                    <li><a><i class="material-icons">compare_arrows</i></a></li>
                    <li><a><i class="material-icons">add_circle_outline</i></a></li>
                </ul>
            </div>
            <table>
                <thead>
                <tr>
                    <th>

                    </th>
                    <th>
                        Person 1
                    </th>
                    <th>
                        Person 2
                    </th>
                    <th>
                        Person 3
                    </th>
                </tr>
                </thead>
                <tbody>
                <tr class="payed">
                    <td>
                        Payed
                    </td>
                    <td>
                        480,-
                    </td>
                    <td>
                        100,-
                    </td>
                    <td>
                        233,-
                    </td>
                </tr>
                <tr class="balance">
                    <td>
                        Balance
                    </td>
                    <td class="positive">
                        209,-
                    </td>
                    <td class="negative">
                        - 171,-
                    </td>
                    <td class="negative">
                        - 38,-
                    </td>
                </tr>
                <tr>
                    <td>
                        Flight tickets
                    </td>
                    <td>
                        300,-
                    </td>
                    <td>
                        100,-
                    </td>
                    <td>

                    </td>
                </tr>
                <tr>
                    <td>
                        Car hire
                    </td>
                    <td>
                        180,-
                    </td>
                    <td>

                    </td>
                    <td>

                    </td>
                </tr>
                <tr>
                    <td>
                        Airbnb
                    </td>
                    <td>
                    </td>
                    <td>
                    </td>
                    <td>
                        233,-
                    </td>
                </tr>
                </tbody>
            </table>

        </div>
    `
});