export default function InputLabel({ value, required=true, className = '', children, ...props }) {
    return (
        <label {...props} className={`block font-medium text-gray-700 ` + className}>
            {value ? value : children}
            {required&&<span className="text-red-600">*</span>}
        </label>
    );
}
