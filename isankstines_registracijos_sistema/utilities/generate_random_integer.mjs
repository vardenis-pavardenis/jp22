const generate_random_integer = function (param_max)
{
    const random_number = Math.random() * param_max

    return Math.round(random_number)
}
export default generate_random_integer