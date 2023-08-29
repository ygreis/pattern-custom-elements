const table = (props) => {

    const thead = (strings, ...values) => `<thead>${String.raw({ raw: strings }, ...values)}</thead>`;
    const tbody = (strings, ...values) => `<tbody>${String.raw({ raw: strings }, ...values)}</tbody>`;
    const tr = (strings, ...values) => `<tr>${String.raw({ raw: strings }, ...values)}</tr>`;
    const th = (strings, ...values) => `<th>${String.raw({ raw: strings }, ...values)}</th>`;
    const td = (strings, ...values) => `<td>${String.raw({ raw: strings }, ...values)}</td>`;

    const render = () => {
        return `
        ${thead}
        ${tbody}
        `
    }

    return {
        thead,
        tbody,
        tr,
        th,
        td,
        render
    }

}